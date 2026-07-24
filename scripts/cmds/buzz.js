const delay = (ms) => new Promise(res => setTimeout(res, ms));

module.exports = {
  config: {
    name: "buzz",
    version: "3.2.0",
    role: 0,
    author: "Shiblu Edit",
    description: "১০০+ Shiblu স্টাইল ক্যাপশন পাঠায়",
    category: "fun",
    usages: "@mention",
    cooldowns: 5,
  },

  onStart: async function({ message, event, args, api }) {
    try {
      const mention = Object.keys(event.mentions)[0];
      if (!mention) {
        return message.reply("😅 যার জন্য মেসেজ যাবে তাকে আগে @ম্যানশন করো ভাই!");
      }

      const name = event.mentions[mention];
      const arraytag = [{ id: mention, tag: name }];

      const messages = [
        `Shiblu তোমাকে ভালোবাসে ${name} ❤️`,
        `Shiblu সবসময় তোমার পাশে আছে ${name} 🫶`,
        `Shiblu তোমাকে খুব মিস করে ${name} 😘`,
        `Shiblu তোমাকে নিয়ে ভাবে ${name} 🌸`,
        `Shiblu চায় তুমি সবসময় হাসো ${name} 😊`,
        `Shiblu এর কাছে তুমি অনেক স্পেশাল ${name} 💝`,
        `Shiblu তোমার জন্য সব করতে রাজি ${name} 💌`,
        `Shiblu তোমার কথা সবসময় ভাবে ${name} 🥰`,
        `Shiblu শুধু তোমাকেই চায় ${name} 💖`,
        `Shiblu তোমাকে ছাড়া কিছু ভাবতে পারে না ${name} 😍`,
        `Shiblu তোমাকে সারাজীবন ভালোবাসবে ${name} 💛`,
        `Shiblu তোমার জন্য অপেক্ষা করছে ${name} 🌹`,
        `Shiblu মনে করে তুমি আজও সুন্দর ${name} 🌸`,
        `Shiblu তোমার হাসি দেখতে পেতে চায় ${name} 😄`,
        `Shiblu তোমাকে কাছে পেতে চায় ${name} 🫶`,
        `Shiblu সবসময় তোমার খোঁজ রাখে ${name} ❤️`,
        `Shiblu তোমাকে নিয়ে স্বপ্ন দেখে ${name} 🌙`,
        `Shiblu তোমার ভালোবাসা চায় ${name} 💖`,
        `Shiblu তোমাকে আজও মনে করছে ${name} 💌`,
        `Shiblu সবসময় তোমার কথা ভাবছে ${name} 🥰`,
        `Shiblu তোমাকে সারাক্ষণ মনে রাখে ${name} 💛`,
        `Shiblu তোমার সঙ্গে সময় কাটাতে চায় ${name} 🌹`,
        `Shiblu তোমাকে প্রিয় মনে করে ${name} 💝`,
        `Shiblu শুধু তোমার জন্য আছে ${name} 🫶`,
        `Shiblu তোমার সাথে হাসতে চায় ${name} 😄`,
        `Shiblu তোমার খুশি চায় ${name} ❤️`,
        `Shiblu তোমাকে সবসময় মিস করছে ${name} 💌`,
        `Shiblu তোমার জন্য দোয়া করছে ${name} 🌸`,
        `Shiblu তোমাকে প্রণয় করে দেখতে চায় ${name} 💖`,
        `Shiblu তোমার কাছে সবসময় ফিরবে ${name} 💛`,
        `Shiblu তোমাকে ভাবতেই ভালো লাগে ${name} 🥰`,
        `Shiblu তোমার সঙ্গে স্বপ্ন ভাগ করতে চায় ${name} 🌙`,
        `Shiblu তোমাকে কখনো ভুলবে না ${name} 💝`,
        `Shiblu তোমার হাসি তার শক্তি ${name} 😄`,
        `Shiblu তোমার জন্য সব সময় অপেক্ষা করবে ${name} 🌹`,
        `Shiblu তোমাকে সান্ত্বনা দিতে চায় ${name} 🫶`,
        `Shiblu তোমার ভালোবাসা চিরকাল চাইবে ${name} ❤️`,
        `Shiblu তোমার কথা মনে পড়ে বারবার ${name} 💌`,
        `Shiblu তোমাকে কাছে পেতে চায় সর্বদা ${name} 💖`,
        `Shiblu তোমার জন্য তার হৃদয় খুলে রেখেছে ${name} 💛`,
        `Shiblu তোমাকে চিরকাল মনে রাখবে ${name} 🥰`,
        `Shiblu তোমার ভালোবাসা প্রাপ্য ${name} 🌸`,
        `Shiblu সব সময় তোমার পাশে থাকবে ${name} 🌙`,
        `Shiblu তোমাকে নিয়ে প্রতিদিন চিন্তা করে ${name} 💝`,
        `Shiblu তোমাকে ভালোবাসার শব্দ জানে না ${name} 💌`,
        `Shiblu তোমাকে সব সময় হাসাতে চায় ${name} 😄`,
        `Shiblu তোমার জন্য প্রার্থনা করে ${name} 🌹`,
        `Shiblu তোমার সঙ্গে প্রতিটি মুহূর্ত উপভোগ করতে চায় ${name} 🫶`,
        `Shiblu তোমাকে সবসময় মনে রাখবে ${name} ❤️`,
        `Shiblu তোমার ভালোবাসায় পূর্ণ ${name} 💖`
      ];

      message.reply(`😎 শুরু হচ্ছে "Shiblu স্টাইল স্টকিং" ${name}-এর জন্য...`);

      for (const msg of messages) {
        await delay(3000);
        message.reply({ body: msg, mentions: arraytag });
      }

      message.reply(`💘 শেষ! Shiblu ${name}-এর প্রতি ভালোবাসার ডেলিভারি সম্পন্ন 😅`);
    } catch (err) {
      console.error(err);
      message.reply("❌ কিছু একটা সমস্যা হয়েছে ভাই, আবার চেষ্টা করো।");
    }
  }
};
