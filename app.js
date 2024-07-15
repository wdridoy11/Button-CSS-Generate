const styleApplyButton = document.getElementById("style-apply-button");
const backgroundColor = document.getElementById("background-color");
const textColor = document.getElementById("text-color");
const fontSize = document.getElementById("font-size");
const borderRadius = document.getElementById("border-radius");
const borderRadiusValue = document.getElementById("border-radius-value");
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


borderRadius.addEventListener("change",()=>{
    styleApplyButton.style.borderRadius =`${borderRadius.value}px`;
    borderRadiusValue.value=`${borderRadius.value}`
})

borderRadiusValue.addEventListener("change",()=>{
    styleApplyButton.style.borderRadius =`${borderRadiusValue.value}px`;
    borderRadius.value=`${borderRadiusValue.value}`;
})




buttonCssCode.innerHTML=`
    background-color: ${backgroundColor.value};<br/>
    color: ${textColor.value};<br/>
    font-size: ${fontSize.value} px;<br/>
    border-radius: ${borderRadius.value} px;
`










// textColor.addEventListener("change",()=>{
//     let textColorValue = textColor.value;
//     styleApplyButton.style.color =`${textColorValue}`;
// })
// backgroundColor.addEventListener("change",()=>{
//     let backgroundColorValue = backgroundColor.value;
//     styleApplyButton.style.backgroundColor =`${backgroundColorValue}`;
// })


// fontSize.addEventListener("change",()=>{ 
//     let fontSizeValue = fontSize.value;
//     styleApplyButton.style.fontSize =`${fontSizeValue}px`;
// })

const styleApply=(clickItem,styleName)=>{
    clickItem.addEventListener("change",()=>{
        let itemValue = clickItem.value;
        if(styleName === "backgroundColor"){
            styleApplyButton.style.backgroundColor =`${itemValue}`;
        }
        else if(styleName === "color"){
            styleApplyButton.style.color =`${itemValue}`;
        }
        else if(styleName === "fontSize"){
            styleApplyButton.style.fontSize =`${itemValue}px`;
        }
    })
}

styleApply(backgroundColor,"backgroundColor");
styleApply(textColor,"color");
styleApply(fontSize,"fontSize");