const size = {
    tablet: '600px',
    laptop: '1100px',
}

export const device = {
    tablet: `(min-width: ${size.tablet}) and (orientation: portrait)`,
    laptop: `(min-width: ${size.laptop})`
};