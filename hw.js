const artists = [
    { name: "Michael Jackson", songs: ["Smooth Criminal", "Billie Jean", "Beat It", "Earth Song"] },
    { name: "Billie Eilish", songs: ["Bad Guy", "Lovely", "Lunch", "Chihiro"] },
    { name: "Kairat Nurtas", songs: ["Auyrmaydy Zhurek", "Ol sen emes"] }
  ];
  
artists[2].songs[1] = "Baika";

const michaelSong = artists[0].songs[artists[0].songs.length - 1];
console.log(`Michael Jacksonnyn songy ani: ${michaelSong}`);

const billieSongs = artists[1].songs.filter(song => song.length <= 6);
console.log(`Billie Eilishtin qysqa olenderi:`, billieSongs);