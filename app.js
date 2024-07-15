const styleApplyButton = document.getElementById("style-apply-button");
const backgroundColor = document.getElementById("background-color");
const textColor = document.getElementById("text-color");
const fontSize = document.getElementById("font-size");
const borderRadius = document.getElementById("border-radius");
const buttonCssCode = document.getElementById("button-css-code");

// const styleApply=(clickItem,styleName, styleValue)=>{
//     clickItem.addEventListener("change",()=>{
        // let backgroundColorValue = backgroundColor.value;
        // `${styleApplyButton.style}.${styleName} = ${styleValue}`
        // console.log(`${styleApplyButton.style}.${styleName} = ${styleValue}`)
        // let textColorValue = textColor.value;
        // styleApplyButton.style.color =`${textColorValue}`;
//         if(styleName === "backgroundColor"){
//             styleApplyButton.style.backgroundColor =`${styleValue}`;
//             console.log("backgroundColor",styleValue)
//         }else{
//             styleApplyButton.style.color =`${styleValue}`;
//             console.log("color",styleValue)
//         }
//     })
// }

// styleApply(backgroundColor,"backgroundColor",backgroundColor.value);
// styleApply(textColor,"color",backgroundColor.value);



backgroundColor.addEventListener("change",()=>{
    let backgroundColorValue = backgroundColor.value;
    styleApplyButton.style.backgroundColor =`${backgroundColorValue}`;
})

textColor.addEventListener("change",()=>{
    let textColorValue = textColor.value;
    styleApplyButton.style.color =`${textColorValue}`;
})
borderRadius.addEventListener("change",()=>{
    let borderRadiusValue = borderRadius.value;
    styleApplyButton.style.borderRadius =`${borderRadiusValue}px`;
    console.log(borderRadiusValue)
})
fontSize.addEventListener("change",()=>{ 
    let fontSizeValue = fontSize.value;
    styleApplyButton.style.fontSize =`${fontSizeValue}px`;
})

buttonCssCode.innerHTML=`
    background-color: ${backgroundColor.value};<br/>
    color: ${textColor.value};<br/>
    font-size: ${fontSize.value} px;<br/>
    border-radius: ${borderRadius.value} px;
`