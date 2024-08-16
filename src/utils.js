export const getImageUrl = (path) => {
    return new URL(`./assetss/${path}`, import.meta.url).href;
};