const { EmbedBuilder, ButtonBuilder, ApplicationCommandOptionType, ApplicationCommandType, ActionRowBuilder, ButtonStyle } = require(`discord.js`);
module.exports = {
    name: 'avatar',
    description: 'Get anybodys Profile Picture Banner.',
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "user",
            description: "Select a user.",
            type: ApplicationCommandOptionType.User,
            required: false,
        },
    ],

    run: async (client, interaction) => {
        
        const usermention = interaction.options.getUser(`user`) || interaction.user;
        const avatar = usermention.displayAvatarURL({ size: 1024, format: "png" });
        const banner = await (await client.users.fetch(usermention.id, { force: true })).bannerURL({ size: 4096 });
        await interaction.channel.sendTyping()

        const cmp = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel(`Avatar`)
                    .setCustomId(`avatar`)
                    .setDisabled(true)
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setLabel(`Banner`)
                    .setCustomId(`banner`)
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setLabel(`Delete`)
                    .setCustomId(`delete`)
                    .setStyle(ButtonStyle.Danger)
            )

        const cmp2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel(`Avatar`)
                    .setCustomId(`avatar`)
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setLabel(`Banner`)
                    .setCustomId(`banner`)
                    .setDisabled(true)
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setLabel(`Delete`)
                    .setCustomId(`delete`)
                    .setStyle(ButtonStyle.Danger)
            )

        const cmp3 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel(`Avatar`)
                    .setCustomId(`avatar`)
                    .setDisabled(true)
                    .setStyle(ButtonStyle.Secondary),

                new ButtonBuilder()
                    .setLabel(`Delete`)
                    .setCustomId(`delete`)
                    .setStyle(ButtonStyle.Danger)
            )

        const embed = new EmbedBuilder()
            .setColor('Random')
            .setAuthor({ name: `${usermention.tag}, avatar`, iconURL: `${usermention.displayAvatarURL()}` })
            .setTitle(`Download`)
            .setURL(avatar)
            .setImage(avatar)

        const embed2 = new EmbedBuilder()
            .setColor('Random')
            .setAuthor({ name: `${usermention.tag}, banner`, iconURL: `${usermention.displayAvatarURL()}` })
            .setTitle(`Download`)
            .setURL(banner)
            .setImage(banner)

        if (!banner) {
            const message2 = await interaction.reply({ embeds: [embed], components: [cmp3] });
            const collector = await message2.createMessageComponentCollector();
            collector.on(`collect`, async c => {
                if (c.customId === 'delete') {

                    if (c.user.id !== interaction.user.id) {
                        return await c.reply({ content: `${error} Only ${interaction.user.tag} can interact with the buttons!`, ephemeral: true })
                    }

                    interaction.deleteReply();
                }
            })
            return;
        }

        
        const message = await interaction.reply({ embeds: [embed], components: [cmp] });
        const collector = await message.createMessageComponentCollector();

        collector.on(`collect`, async c => {

            if (c.customId === 'avatar') {

                if (c.user.id !== interaction.user.id) {
                    return await c.reply({ content: `${error} Only ${interaction.user.tag} can interact with the buttons!`, ephemeral: true })
                }

                await c.update({ embeds: [embed], components: [cmp] })
            }

            if (c.customId === 'banner') {

                if (c.user.id !== interaction.user.id) {
                    return await c.reply({ content: `${error} Only ${interaction.user.tag} can interact with the buttons!`, ephemeral: true })
                }

                await c.update({ embeds: [embed2], components: [cmp2] })
            }

            if (c.customId === 'delete') {

                if (c.user.id !== interaction.user.id) {
                    return await c.reply({ content: `${error} Only ${interaction.user.tag} can interact with the buttons!`, ephemeral: true })
                }

                interaction.deleteReply();
            }
        })
    }
}