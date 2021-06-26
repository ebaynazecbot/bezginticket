const Discord = require('discord.js');
const data = require('quick.db')

exports.run = async (client, message, args) => {
const prefix = await data.fetch(`prefix.${message.guild.id}`) || client.ayarlar.prefix;
  
if(!args[0]) {
  
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.addField(`Yardım Menüsü`, `\`${prefix}yardım komutlar\` - Komutlar hakkında bilgi verir.
\`${prefix}yardım setup\` - Kurulum hakkında bilgi verir.
\`${prefix}yardım sss\` - Sıkça sorulan sorular.`)

message.channel.send(embed)  }

if(args[0] === 'komutlar') {
  
const embed = new Discord.RichEmbed()
.setColor('GREEN')
.setDescription(`() = Tercih.
[] = Gerekli.`)
.addField(`==================================
Ticket Commands
==================================

\`$ekle [Etiket] (kanal)\``, `*Açıklama: Ticket a başka birisini/rolü eklersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$sil [Etiket] (kanal)\``, `*Açıklama: Ticket a ekli birisini/rolü silersiniz.
Ekstra kullanım: $kaldır*`)

.addField(`\`$kapat [Etiket] (kanal)\``, `*Açıklama: Ticket ı kapatırsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$aç [Etiket] (kanal)\``, `*Açıklama: Ticket ı açarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$bilet-sil \``, `*Açıklama: Ticket ı silersiniz.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$ping [gönder])\``, `*Açıklama: Botun pingini gösterir.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$ticket-kanal [ayarla/sıfırla] (kanal)\``, `*Açıklama: Ticket mesajının kanalını ayarlarsınız.
Ekstra kullanım: Bulunmuyor.*`)

.addField(`\`$ticket [gönder])\``, `*Açıklama: Ticket mesajını yollar.
Ekstra kullanım: Bulunmuyor.*`)
message.channel.send(embed)  }  

  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'yardım'
};