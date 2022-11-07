const text = [
    ` I'm baby williamsburg woke franzen vinyl cronut. 
    Tote bag affogato letterpress enamel pin irony.
     Four loko keffiyeh gluten-free, deep v bodega boys ascot viral DSA.
      Synth williamsburg actually four loko literally affogato. 
      Twee PBR&B mustache yuccie selfies, semiotics chillwave Brooklyn kinfolk bushwick plaid.`,
    ` Semiotics tote bag 3 wolf moon, trust fund kale chips raw denim unicorn glossier affogato 
    kogi kombucha. Messenger bag pok pok franzen prism art party. Authentic farm-to-table fingerstache 
    marfa whatever chartreuse chia cliche la croix. Deep v readymade listicle chia praxis Brooklyn 
    forage kickstarter waistcoat sartorial.`,
    `Put a bird on it iceland meditation, 
    fixie vice poutine ennui kinfolk yes plz post-ironic hell of shaman
     kickstarter umami. Ascot meh tote bag edison bulb pug humblebrag.
      Authentic chambray hoodie lo-fi taxidermy art party PBR&B, deep v cornhole bicycle
       rights meggings. Copper mug schlitz pork belly raclette meditation hammock VHS. 
       You probably haven't heard of them tousled bicycle rights pitchfork post-ironic roof 
       party cray four dollar toast letterpress keytar woke viral shoreditch normcore. 
       Chartreuse affogato prism flannel chicharrones pabst big mood. Meditation leggings 
       gentrify drinking vinegar. `,
    `Irony selfies mustache tbh disrupt. 
    Selfies polaroid blog stumptown.
     Iceland put a bird on it tumeric slow-carb squid bushwick, 
     freegan fit dreamcatcher gentrify craft beer quinoa tousled neutra subway tile. 
     Pabst blog shabby chic, roof party bruh intelligentsia raclette you probably haven't 
     heard of them farm-to-table cronut vaporware twee. `,
    `Mustache air plant man bun meh 
    pickled vaporware. XOXO cronut small batch, raw denim
     DIY wayfarers paleo ethical pork belly. Raclette try-hard sustainable
      cray fingerstache Brooklyn. Taxidermy kale chips everyday carry tumeric. 
      Thundercats freegan ramps, post-ironic tattooed typewriter farm-to-table. 
      Keffiyeh pitchfork tumeric church-key venmo tousled subway tile bitters echo 
      park knausgaard cardigan, mlkshk tonx. Cred tousled wolf church-key gentrify raw denim. `,
      ` I'm baby williamsburg woke franzen vinyl cronut. 
    Tote bag affogato letterpress enamel pin irony.
     Four loko keffiyeh gluten-free, deep v bodega boys ascot viral DSA.
      Synth williamsburg actually four loko literally affogato. 
      Twee PBR&B mustache yuccie selfies, semiotics chillwave Brooklyn kinfolk bushwick plaid.`,
    ` Semiotics tote bag 3 wolf moon, trust fund kale chips raw denim unicorn glossier affogato 
    kogi kombucha. Messenger bag pok pok franzen prism art party. Authentic farm-to-table fingerstache 
    marfa whatever chartreuse chia cliche la croix. Deep v readymade listicle chia praxis Brooklyn 
    forage kickstarter waistcoat sartorial.`,
    `Put a bird on it iceland meditation, 
    fixie vice poutine ennui kinfolk yes plz post-ironic hell of shaman
     kickstarter umami. Ascot meh tote bag edison bulb pug humblebrag.
      Authentic chambray hoodie lo-fi taxidermy art party PBR&B, deep v cornhole bicycle
       rights meggings. Copper mug schlitz pork belly raclette meditation hammock VHS. 
       You probably haven't heard of them tousled bicycle rights pitchfork post-ironic roof 
       party cray four dollar toast letterpress keytar woke viral shoreditch normcore. 
       Chartreuse affogato prism flannel chicharrones pabst big mood. Meditation leggings 
       gentrify drinking vinegar. `,
    `Irony selfies mustache tbh disrupt. 
    Selfies polaroid blog stumptown.
     Iceland put a bird on it tumeric slow-carb squid bushwick, 
     freegan fit dreamcatcher gentrify craft beer quinoa tousled neutra subway tile. 
     Pabst blog shabby chic, roof party bruh intelligentsia raclette you probably haven't 
     heard of them farm-to-table cronut vaporware twee. `,
    `Mustache air plant man bun meh 
    pickled vaporware. XOXO cronut small batch, raw denim
     DIY wayfarers paleo ethical pork belly. Raclette try-hard sustainable
      cray fingerstache Brooklyn. Taxidermy kale chips everyday carry tumeric. 
      Thundercats freegan ramps, post-ironic tattooed typewriter farm-to-table. 
      Keffiyeh pitchfork tumeric church-key venmo tousled subway tile bitters echo 
      park knausgaard cardigan, mlkshk tonx. Cred tousled wolf church-key gentrify raw denim. `,
];

const form = document.querySelector(".lorem-form");
const numofpara= document.getElementById("numofpara");
const numofparaRange= document.getElementById("numofparaRange");
const result = document.querySelector(".lorem-text")


function sycnParaNumbers(e){
    const value=e.target.value;
    numofpara.value =value;
    numofparaRange.value=value;
}


form.addEventListener("submit", e=>{
    e.preventDefault();
    const value = parseInt(numofpara.value);
    let temptxt = text.slice(0, value);
    temptxt = temptxt.map(item=>`<p class= "result">${item}</p>`).join("");
    result.innerHTML = temptxt;
})
numofpara.addEventListener("input", sycnParaNumbers);
numofparaRange.addEventListener("input", sycnParaNumbers);