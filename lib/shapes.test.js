const {Triangle, Circle, Square} = require('./shapes');

describe ('Triangle', () => {
    it ('should return a string for the corresponding SVG file with the given text, text color, and shape color', () => {
        const shape = new Triangle("blue", "HEY", "black");
        expect(shape.generateSVG()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150 5, 260 200, 40 200" fill="blue"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">HEY</text>
        </svg>
        `);
    });
});

describe ('Circle', () => {
    it ('should return a string for the corresponding SVG file with the given text, text color, shape color', () => {
        const shape = new Circle("blue", "HEY", "black");
        expect(shape.generateSVG()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="blue"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">HEY</text>
        </svg>
        `);
    });
});

describe ('Square', () => {
    it ('should return a string for the corresponding SVG file with the text, text color, given shape color', () => {
        const shape = new Square("blue", "HEY", "black");
        expect(shape.generateSVG()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="65" y="30" width="175" height="175" fill="blue"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">HEY</text>
        </svg>
        `);
    });
});

