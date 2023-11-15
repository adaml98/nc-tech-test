export const formatSizes = (availableSizes) =>{
    const formatedSizes = [];
    for (let i = 0; i < availableSizes.length; i++) {
        if(availableSizes[i] === 'sm'){
            formatedSizes.push({"id": "sm", "title": "Small"})
        } else if (availableSizes[i] === 'md') {
            formatedSizes.push({"id": "md", "title": "Medium"})
        }else if (availableSizes[i] === 'lg') {
            formatedSizes.push({"id": "lg", "title": "Large"})
        }else if (availableSizes[i] === 'gt') {
            formatedSizes.push({"id": "gt", "title": "Giant"})
        };
    }
    return formatedSizes;
}