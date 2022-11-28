const fs = require('fs');
const moment = require("moment-timezone");
const { getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, reSize, makeid, jsonFormt } = require("./myfunc");
const { TelegraPh } = require('./uploader');
const setting = JSON.parse(fs.readFileSync('./setting.js'));

exports.groupResponse_Remove = async (ronzz, update, msg) => {
const metadata = await ronzz.groupMetadata(update.id)
for (let participant of update.participants) {
try{
let dnew = new Date(new Date + 3600000)
let hari = dnew.toLocaleDateString('id', { weekday: 'long' })
const d = new Date
const tanggal = d.toLocaleDateString('id', { 
day: 'numeric', 
month: 'long', 
year: 'numeric' 
})
const jamwib = moment.tz('asia/jakarta').format('HH:mm:ss')
let metadata = await ronzz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'remove'){
try {
ppuser = await ronzz.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const bio = (await ronzz.fetchStatus(num).catch(console.error) || {}).status || 'Tidak ada bio, mungkin kamu private🙏'
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'GoodBye👋'}, type: 1 }]
await ronzz.sendMessage(
update.id, 
{
image: { url: ppuser },
caption: `*Leave From Grup ${metadata.subject}*

📛 : _@${num.split("@")[0]}_
🔢 : _${num.split("@")[0]}_
💌 : _${bio ? bio : '-'}_
🏅 : _${metadata.participants.length ? metadata.participants.length : "Undefined"}_
📆 : _${hari}, ${tanggal}_
⏰ : _${jamwib} *WIB*_

*┗━━ ❑ GoodBye👋*`,
buttons: button,
footer: `${setting.botName} © 2022`, 
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Welcome = async (ronzz, update) => {
const metadata = await ronzz.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let dnew = new Date(new Date + 3600000)
let hari = dnew.toLocaleDateString('id', { weekday: 'long' })
const d = new Date
const tanggal = d.toLocaleDateString('id', { 
day: 'numeric', 
month: 'long', 
year: 'numeric' 
})
const jamwib = moment.tz('asia/jakarta').format('HH:mm:ss')
let metadata = await ronzz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'add') {
try {
ppuser = await ronzz.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
}
const bio = (await ronzz.fetchStatus(num).catch(console.error) || {}).status || 'Tidak ada bio, mungkin kamu private🙏'
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Welcome👋'}, type: 1 }]
await ronzz.sendMessage(
update.id, 
{ 
image: { url: ppuser },
caption: `*Welcome To ${metadata.subject}*

📛 : _@${num.split("@")[0]}_
🔢 : _${num.split("@")[0]}_
💌 : _${bio ? bio : '-'}_
🏅 : _${metadata.participants.length ? metadata.participants.length : "Undefined"}_
📆 : _${hari}, ${tanggal}_
⏰ : _${jamwib} *WIB*_

📄 *Deskripsi :*
${metadata.desc ? metadata.desc : 'Tidak ada deskripsi🙏'}`,
buttons: button, 
footer: `${setting.botName} © 2022`,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Promote = async (ronzz, update) => {  
const metadata = await ronzz.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await ronzz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'promote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await ronzz.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Promote From ${metadata.subject}*`,
buttons: button, 
footer: `${setting.botName} © 2022`,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}
  
exports.groupResponse_Demote = async (ronzz, update) => {  
const metadata = await ronzz.groupMetadata(update.id)   
for (let participant of update.participants) {
try{
let metadata = await ronzz.groupMetadata(update.id)
let participants = update.participants
for (let num of participants) {
if (update.action == 'demote') {
var button = [{ buttonId: '!text_grup', buttonText: { displayText: 'Selamat🎉'}, type: 1 }]
await ronzz.sendMessage(
update.id, 
{ 
text: `*@${num.split("@")[0]} Demote From ${metadata.subject}*`,
buttons: button, 
footer: `${setting.botName} © 2022`,
mentions: [num] })
}
}
} catch (err) {
console.log(err)
}
}   
}