const icon = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABAQEBAREBIUFBIZGxgbGSUiHx8iJTgoKygrKDhVNT41NT41VUtbSkVKW0uHal5eaoecg3yDnL2pqb3u4u7///8BEBAQEBEQEhQUEhkbGBsZJSIfHyIlOCgrKCsoOFU1PjU1PjVVS1tKRUpbS4dqXl5qh5yDfIOcvampve7i7v/////AABEIADIAMgMBIgACEQEDEQH/xABqAAEAAgMBAQAAAAAAAAAAAAAAAwYCBAcBBRAAAgICAgADBgYDAAAAAAAAAQIAAwQFBhESEyExMjRBUWEUIkNxdIEjVXIBAQAAAAAAAAAAAAAAAAAAAAARAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AL/Ph7bkWJriagPNuH6YmPIdqddiAVHq670SUDXa47E5LPkpUtSeN3eBvX8p29h/JalI+iLI6+TbpD8X4/s6KZsrx7Hamy5dzimtCAzQnHceyu2xNzislQBcgQPvazl9NpFWYgpY/qL7ktgIIBB7E49stbka28V29FWHddi+66y1cS3Lhxr7n+9MC7xEQOY8qvNu4tT5UoiTzS/Ab7+HIuTIU3WV9H8DiSaX4DffwoGGszbMXFvofWHJpuZX9Q3ymzdsCcTKx8bRmjz1Csyh5u7jaZ+Amqrxclq0bArYgTT1e921+xwqbMxyj3oGEDFLHt4vlLaS3k5aCvv2pK9j3Nj303IemrdWH9GW/Yemv5CB/tBKYql2VB7WIA/uB3AfmAIPoRE8UeFVXv2ACIFV5hq2tpTNqUlqR0//ABKrpsvCoTYU5buiZFAQMi9zqpAIII7BlH3HE38b3a7or86YGtn38dz/AML483JXyKFqHVUgxhxrFyab1z8otW4cA1SuXY+RjsUupeth8mUiRIrOQEUsfoB3Atez2OrfCz68W617MnKW4hkkHGNccrOXIdf8NB7/AHeNdxjOymVshTRV9/fM6Ni4tGHQlFKBUSBNERAREQHQPYIBEeBF91QP2ERAREQERED/2Q==";
class DataSaver {

  constructor() {}

  getInfo() {
    return {
      id: 'datasaver',
      name: 'Data Saver',

      colour: '#CC6633',
      colourSecondary: '#C36E4A',
      colourTertiary: '#914D30',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'getvars',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Get Variables',
          /*arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }*/
        }
      ]
    }
    
    
    getvars()
    {
        console.log('hi');
        return 'hi';
    }
    
    /*functionname({A, B, C})
    {
        
    }*/
    
    
    
  }
}

Scratch.extensions.register(new DataSaver());
