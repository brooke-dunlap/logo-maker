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
        <svg width="300" height="200"
            <polygon points="0 25,50 50,100 25,100 50,0 50" fill="${this.color}"/>
            <text x="10" y="10" fill="${this.textColor}">${this.text}</text>
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
        <svg width="300" height="200"
            <circle cx="25" cy="75" r="20" fill="${this.color}"/>
            <text x="10" y="10" fill="${this.textColor}">${this.text}</text>
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
        <svg width="300" height="200"
            <rectangle x="10" y="10" width="30" height="30" fill="${this.color}"/>
            <text x="10" y="10" fill="${this.textColor}">${this.text}</text>
        </svg>
        `;
        return svg;
    }
}

module.exports = {Shape, Triangle, Circle, Square};