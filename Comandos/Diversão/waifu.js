const Discord = require('discord.js');
const axios = require('axios');

module.exports = {
  name: 'waifu',
  description: 'Imagem aleatoria de uma waifu.',
  type: Discord.ApplicationCommandType.ChatInput,

  async run(client, interaction, args) {
    const response = await axios.get(`https://waifu.pics/api/sfw/waifu`);
    const imageUrl = response.data.url;

    const embed = new Discord.EmbedBuilder()
      .setColor('#b218fc')
      
      .setImage(imageUrl)


    const waifuButton = new Discord.ButtonBuilder()
      .setLabel('Waifu')
      .setStyle('Primary')
      .setCustomId('waifu_button');

    const stopButton = new Discord.ButtonBuilder()
      .setLabel('Stop')
      .setStyle('Danger')
      .setCustomId('stop_button');



    const buttonRow = new Discord.ActionRowBuilder()
      .addComponents(waifuButton, stopButton);

    const reply = await interaction.reply({ embeds: [embed], components: [buttonRow] });

    const filter = (buttonInteraction) => {
      return ['waifu_button', 'stop_button'].includes(buttonInteraction.customId) && buttonInteraction.user.id === interaction.user.id;
    };

    const collector = reply.createMessageComponentCollector({ filter });

    collector.on('collect', async (buttonInteraction) => {
      if (buttonInteraction.customId === 'waifu_button') {
        const waifuResponse = await axios.get(`https://waifu.pics/api/sfw/waifu`);
        const waifuImageUrl = waifuResponse.data.url;
        embed.setImage(waifuImageUrl);
        await buttonInteraction.update({ embeds: [embed] });
      } else if (buttonInteraction.customId === 'stop_button') {
        buttonRow.components.forEach((component) => {
          component.setDisabled(true);
        });
        await buttonInteraction.update({ components: [buttonRow] });
        collector.stop();
      }
    });

    collector.on('end', async () => {
      buttonRow.components.forEach((component) => {
        component.setDisabled(true);
      });
      await reply.edit({ components: [buttonRow] });
    });
  },
};
