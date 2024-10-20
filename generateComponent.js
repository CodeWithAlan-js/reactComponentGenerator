const fs = require("fs");
const path = require("path");

const generateComponent = (componentName) => {
  const componentTemplate = `
    const ${componentName} = () => {
        return (
            <div>
                ${componentName}
            </div>
        )
    }
    
    export default ${componentName};
    `;

  const dir = "./src/components";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = path.join(dir, `${componentName}.js`);
  fs.writeFileSync(filePath, componentTemplate);
  console.log(`Component ${componentName} created successfully!`);
};

const componentName = process.argv[2];
if (!componentName) {
  console.error("Please provide component name");
  process.exit(1);
}

generateComponent(componentName);
