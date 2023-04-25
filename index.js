const Discord = require("discord.js")

const config = require("./config.json")

const { QuickDB } = require("quick.db")
const db = new QuickDB();

const client = new Discord.Client({ 
  intents: [ 
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.GuildPresences
  ]
    });

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})

client.on('ready', () => {
  console.log(`🔥 Estou online em ${client.user.username}!`)
})


client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token)

client.on("interactionCreate", (interaction) => {
    if (interaction.isSelectMenu()) {
      if (interaction.customId === "painel_ticket") {
        let opc = interaction.values[0]
        if (opc === "opc1") {
  
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Nova opção
  
          let nome = `📨-${interaction.user.id}`;
          let categoria = "" // Coloque o ID da categoria
  
          if (!interaction.guild.channels.cache.get(categoria)) categoria = null;
  
          if (interaction.guild.channels.cache.find(c => c.name === nome)) {
            interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
          } else {
            interaction.guild.channels.create({
            name: nome,
            type: Discord.ChannelType.GuildText,
            parent: categoria,
            permissionOverwrites: [
              {
                id: interaction.guild.id,
                deny: [
                  Discord.PermissionFlagsBits.ViewChannel
                ]
              },
              {
                id: interaction.user.id,
                allow: [
                  Discord.PermissionFlagsBits.ViewChannel,
                  Discord.PermissionFlagsBits.SendMessages,
                  Discord.PermissionFlagsBits.AttachFiles,
                  Discord.PermissionFlagsBits.EmbedLinks,
                  Discord.PermissionFlagsBits.AddReactions
                ]
              }
            ]
          }).then( (ch) => {
            interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
            let embed = new Discord.EmbedBuilder()
            .setColor("Random")
            .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 1.`);
            let botao = new Discord.ActionRowBuilder().addComponents(
              new Discord.ButtonBuilder()
            .setCustomId("fechar_ticket")
            .setEmoji("🔒")
            .setStyle(Discord.ButtonStyle.Danger)
            );
  
            ch.send({ embeds: [embed], components: [botao] }).then( m => { 
              m.pin()
             })
          })
          }
          
        } else if (opc === "opc2") {
  
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Nova opção
  
          let nome = `📨-${interaction.user.id}`;
          let categoria = "" // Coloque o ID da categoria
  
          if (!interaction.guild.channels.cache.get(categoria)) categoria = null;
  
          if (interaction.guild.channels.cache.find(c => c.name === nome)) {
            interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
          } else {
            interaction.guild.channels.create({
            name: nome,
            type: Discord.ChannelType.GuildText,
            parent: categoria,
            permissionOverwrites: [
              {
                id: interaction.guild.id,
                deny: [
                  Discord.PermissionFlagsBits.ViewChannel
                ]
              },
              {
                id: interaction.user.id,
                allow: [
                  Discord.PermissionFlagsBits.ViewChannel,
                  Discord.PermissionFlagsBits.SendMessages,
                  Discord.PermissionFlagsBits.AttachFiles,
                  Discord.PermissionFlagsBits.EmbedLinks,
                  Discord.PermissionFlagsBits.AddReactions
                ]
              }
            ]
          }).then( (ch) => {
            interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
            let embed = new Discord.EmbedBuilder()
            .setColor("Random")
            .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 2.`);
            let botao = new Discord.ActionRowBuilder().addComponents(
              new Discord.ButtonBuilder()
            .setCustomId("fechar_ticket")
            .setEmoji("🔒")
            .setStyle(Discord.ButtonStyle.Danger)
            );
  
            ch.send({ embeds: [embed], components: [botao] }).then( m => { 
              m.pin()
             })
          })
          }
          
        } else if (opc === "opc3") {
  
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // Nova opção
  
          let nome = `📨-${interaction.user.id}`;
          let categoria = "" // Coloque o ID da categoria
  
          if (!interaction.guild.channels.cache.get(categoria)) categoria = null;
  
          if (interaction.guild.channels.cache.find(c => c.name === nome)) {
            interaction.reply({ content: `❌ Você já possui um ticket aberto em ${interaction.guild.channels.cache.find(c => c.name === nome)}!`, ephemeral: true })
          } else {
            interaction.guild.channels.create({
            name: nome,
            type: Discord.ChannelType.GuildText,
            parent: categoria,
            permissionOverwrites: [
              {
                id: interaction.guild.id,
                deny: [
                  Discord.PermissionFlagsBits.ViewChannel
                ]
              },
              {
                id: interaction.user.id,
                allow: [
                  Discord.PermissionFlagsBits.ViewChannel,
                  Discord.PermissionFlagsBits.SendMessages,
                  Discord.PermissionFlagsBits.AttachFiles,
                  Discord.PermissionFlagsBits.EmbedLinks,
                  Discord.PermissionFlagsBits.AddReactions
                ]
              }
            ]
          }).then( (ch) => {
            interaction.reply({ content: `✅ Olá ${interaction.user}, seu ticket foi aberto em ${ch}!`, ephemeral: true })
            let embed = new Discord.EmbedBuilder()
            .setColor("Random")
            .setDescription(`Olá ${interaction.user}, você abriu o ticket pela opção 3.`);
            let botao = new Discord.ActionRowBuilder().addComponents(
              new Discord.ButtonBuilder()
            .setCustomId("fechar_ticket")
            .setEmoji("🔒")
            .setStyle(Discord.ButtonStyle.Danger)
            );
  
            ch.send({ embeds: [embed], components: [botao] }).then( m => { 
              m.pin()
             })
          })
          }
          
        }
      }
    } else if (interaction.isButton()) {
      if (interaction.customId === "fechar_ticket") {
        interaction.reply(`Olá ${interaction.user}, este ticket será excluído em 5 segundos...`)
        setTimeout ( () => {
          try { 
            interaction.channel.delete()
          } catch (e) {
            return;
          }
        }, 5000)
      }
    }
  })

client.on("guildMemberAdd", (member) => {
    let canal_logs = "1100201622166044844"; // Coloque o ID do canal de texto
    if (!canal_logs) return;
  
    let embed = new Discord.EmbedBuilder()
    .setColor("Green")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle("👋 Boas Vindas!")
    .setDescription(`> Olá ${member}!\nSeja Bem-Vindo(a) ao servidor \`${member.guild.name}\`!\nAtualmente estamos com \`${member.guild.memberCount}\` membros.`);
  
    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` }) // Caso queira que o usuário não seja mencionado, retire a parte do "content".
  })

  client.on("guildMemberRemove", (member) => {
    let canal_logs = "1100201625102057512"; // Coloque o ID do canal de texto
    if (!canal_logs) return;
  
    let embed = new Discord.EmbedBuilder()
    .setColor("Red")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle(`Adeus ${member.user.username}....`)
    .setDescription(`> O usuário ${member} saiu do servidor!\n> 😓 Espero que retorne um dia.\n> Nos sobrou apenas \`${member.guild.memberCount}\` membros.`);
  
    member.guild.channels.cache.get(canal_logs).send({ embeds: [embed], content: `${member}` }) // Caso queira que o usuário não seja mencionado, retire a parte do "content". 
  })

  client.on("interactionCreate", async (interaction) => {
    if (interaction.isButton()) {
      if (interaction.customId === "verificar") {
        let role_id = await db.get(`cargo_verificação_${interaction.guild.id}`);
        let role = interaction.guild.roles.cache.get(role_id);
        if (!role) return;
        interaction.member.roles.add(role.id)
        interaction.reply({ content: `Ola **${interaction.user.username}**, você foi verificado!`, ephemeral: true })
      }
    }
  })

  client.on("guildMemberAdd", (member) => {
    let cargo_autorole = member.guild.roles.cache.get("1100215920338665576") // Coloque o ID do cargo
    if (!cargo_autorole) return console.log("❌ O AUTOROLE não está configurado.")
  
    member.roles.add(cargo_autorole.id).catch(err => {
      console.log(`❌ Não foi possível adicionar o cargo de autorole no usuário ${member.user.tag}.`)
    })
  })
  const { joinVoiceChannel } = require('@discordjs/voice');

client.on("ready", () => {
  let canal = client.channels.cache.get("1100223164514058380") // coloque o ID do canal de voz
  if (!canal) return console.log("❌ Não foi possível entrar no canal de voz.")
  if (canal.type !== Discord.ChannelType.GuildVoice) return console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)

  try {

    joinVoiceChannel({
      channelId: canal.id, // ID do canal de voz
      guildId: canal.guild.id, // ID do servidor
      adapterCreator: canal.guild.voiceAdapterCreator,
    })
    console.log(`✅ Entrei no canal de voz [ ${canal.name} ] com sucesso!`)

  } catch(e) {
    console.log(`❌ Não foi possível entrar no canal [ ${canal.name} ].`)
  }

})