class Shape {
    constructor(color) {
        this.color = color;
    }
    
    generateSVG() {};
}

class Triangle extends Shape {
    constructor(color, text, textColor){
        super(color);
        this.text = text;
        this.textColor = textColor;
    }

    generateSVG() {
        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150 5, 260 200, 40 200" fill="${this.color}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
        return svg;
    }
}

class Circle extends Shape {
    constructor(color, text, textColor){
        super(color);
        this.text = text;
        this.textColor = textColor;
    }

    generateSVG() {
        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="${this.color}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
        return svg;
    }
}

class Square extends Shape {
    constructor(color, text, textColor){
        super(color);
        this.text = text;
        this.textColor = textColor;
    }

    generateSVG() {
        const svg = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="65" y="30" width="175" height="175" fill="${this.color}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
        return svg;
    }
}

module.exports = {Triangle, Circle, Square};