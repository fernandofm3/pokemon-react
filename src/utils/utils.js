export const colorTypeGradients = (type1, type2, length) => {
    // debugger
    let color1, color2;

    switch (type1) {
        case "grass":
            color1 = "#a8ff98";
            break;
        case "poison":
            color1 = "#d6a2e4";
            break;
        case "normal":
            color1 = "#dcdcdc";
            break;
        case "fire":
            color1 = "#ffb971";
            break;
        case "water":
            color1 = "#8cc4e2";
            break;
        case "electric":
            color1 = "#ffe662";
            break;
        case "ice":
            color1 = "#8cf5e4";
            break;
        case "fighting":
            color1 = "#da7589";
            break;
        case "ground":
            color1 = "#e69a74";
            break;
        case "flying":
            color1 = "#bbc9e4";
            break;
        case "psychic":
            color1 = "#ffa5da";
            break;
        case "bug":
            color1 = "#bae05f";
            break;
        case "rock":
            color1 = "#C9BB8A";
            break;
        case "ghost":
            color1 = "#8291e0";
            break;
        case "dark":
            color1 = "#8e8c94";
            break;
        case "dragon":
            color1 = "#88a2e8";
            break;
        case "steel":
            color1 = "#9fb8b9";
            break;
        case "fairy":
            color1 = "#fdb9e9";
            break;
        default:
            color1 = "gainsboro";
            break;
    }

    if (length === 2) {
        switch (type2) {
            case "grass":
                color2 = "#a8ff98";
                break;
            case "poison":
                color2 = "#d6a2e4";
                break;
            case "normal":
                color2 = "#dcdcdc";
                break;
            case "fire":
                color2 = "#ffb971";
                break;
            case "water":
                color2 = "#8cc4e2";
                break;
            case "electric":
                color2 = "#ffe662";
                break;
            case "ice":
                color2 = "#8cf5e4";
                break;
            case "fighting":
                color2 = "#da7589";
                break;
            case "ground":
                color2 = "#e69a74";
                break;
            case "flying":
                color2 = "#bbc9e4";
                break;
            case "psychic":
                color2 = "#ffa5da";
                break;
            case "bug":
                color2 = "#bae05f";
                break;
            case "rock":
                color2 = "#C9BB8A";
                break;
            case "ghost":
                color2 = "#8291e0";
                break;
            case "dark":
                color2 = "#8e8c94";
                break;
            case "dragon":
                color2 = "#88a2e8";
                break;
            case "steel":
                color2 = "#9fb8b9";
                break;
            case "fairy":
                color2 = "#fdb9e9";
                break;
            default:
                color2 = "gainsboro";
                break;
        }
    } else if (length === 1) {
        color2 = color1;
    }

    const finalColor = [color1, color2];

    return finalColor;
};

export const borderColorInfoPokemon = (color) => {
    let finalColor;

    switch (color) {
        case "black":
            finalColor = "black";
            break;
        case "blue":
            finalColor = "#0e5fd5";
            break;
        case "brown":
            finalColor = "#7d5e41";
            break;
        case "gray":
            finalColor = "gray";
            break;
        case "green":
            finalColor = "green";
            break;
        case "pink":
            finalColor = "#c9909a";
            break;
        case "purple":
            finalColor = "purple";
            break;
        case "red":
            finalColor = "red";
            break;
        case "white":
            finalColor = "#adb5bd";
            break;
        case "yellow":
            finalColor = "#ffc107";
            break;
        default:
            finalColor = "gainsboro";
            break;
    }

    return finalColor;
};

export const lightColorInfoPokemon = (color) => {
    let finalColor;

    switch (color) {
        case "black":
            finalColor = "#0000002b";
            break;
        case "blue":
            finalColor = "#0d6efd24";
            break;
        case "brown":
            finalColor = "#7d5e413d";
            break;
        case "gray":
            finalColor = "#8080803b";
            break;
        case "green":
            finalColor = "#00800030";
            break;
        case "pink":
            finalColor = "#c9909a36";
            break;
        case "purple":
            finalColor = "#80008021";
            break;
        case "red":
            finalColor = "#ff000021";
            break;
        case "white":
            finalColor = "#adb5bd33";
            break;
        case "yellow":
            finalColor = "#ffc10726";
            break;
        default:
            finalColor = "gainsboro";
            break;
    }

    return finalColor;
};
