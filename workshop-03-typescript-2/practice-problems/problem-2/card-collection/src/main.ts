// Create enum CharacterType here
enum CharacterType {
    WATER = 'Water',
    EARTH = 'Earth',
    FIRE = 'Fire',
    AIR = 'Air'
}

// Create interface Character here
interface Character {
    name: string,
    image: string,
    type: CharacterType,
    hp: number,
    description: string
}

// Define array characters here
let characters: Character[] = [
    {
        name: "Aang",
        image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/b/b0/Aang_img.jpg",
        type: CharacterType.AIR,
        hp: 150,
        description: "my name is ong, and im the ovatar"
    },
    {
        name: "Katara",
        image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/2/25/Katara_img.jpg?width=325",
        type: CharacterType.WATER,
        hp: 150,
        description: "ever since mom died, ive been doing all the work around camp while you've been off playing soldier"
    }, 
    {
        name: "Toph",
        image: "https://64.media.tumblr.com/9f3798c09a3cb7f4b6b06580570c0e5b/feb7636602078251-60/s540x810/c3ff8e9efe9fbd087d74259f6cee46736ac7bd4d.png",
        type: CharacterType.EARTH,
        hp: 200,
        description: "i am the greatest earthbender of all time. dont you two dunderheads ever forget it"
    }, 
    {
        name: "Zuko",
        image: "https://cdn.staticneo.com/w/avatar/thumb/Zuko.JPG/250px-Zuko.JPG",
        type: CharacterType.FIRE,
        hp: 100,
        description: "hello, zuko here"
    }
]

// Create function addCharacter here (include params for name, image, type, hp, description)
function addCharacter(name: string, image: string, type: CharacterType, hp: number, description: string) {
    let newCharacter: Character = {
        name,
        image,
        type,
        hp,
        description
    }

    characters.push(newCharacter)
}

// Create function removeCharacter here
function removeCharacter(name: string) {
    let newCharacters = characters.filter(character => character.name !== name);
    characters = newCharacters
}

export { Character, CharacterType, characters, addCharacter, removeCharacter };