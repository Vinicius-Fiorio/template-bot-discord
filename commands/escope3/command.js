const { SlashCommandBuilder, AttachmentBuilder  } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Ping')
		.setDescription('return pong')

		.addStringOption(question =>
			question.setName('tipo')
				.setDescription('qual tipo de pong você quer')
				.setRequired(true)
        .addChoices(
          { name: 'Negrito', value: 'n' },
          { name: 'Grande', value: 'g' },
          { name: 'escondido', value: 'e' },
        ))
	,

	async execute(interaction) {
    const question = interaction.options.getString('tipo');
    switch (question) {
      case "n":
        interaction.reply(`**Pong**`);
        break;
      case "g":
        interaction.reply(`# Pong`);
        break;
      case "e":
        interaction.reply(`||Pong||`);
        break;
    }
	},
};