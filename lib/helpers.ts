
const getRandomImages = (count: number) => {
    const images = [];
    for (let i = 0; i < count; i++) {
        images.push(`https://picsum.photos/800/800?random=${i + 10}`);
    }
    return images;
}

export  {getRandomImages}