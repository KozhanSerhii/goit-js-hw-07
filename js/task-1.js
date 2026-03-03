const items = document.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

const temp = document.querySelectorAll("h2");


for (const element of items) {
    const topic = element.querySelector("h2").textContent;

    const totalAmount = element.querySelectorAll("li").length;

    console.log(`Category: ${topic}t`);
    console.log(`Elements: ${totalAmount}`);
}
