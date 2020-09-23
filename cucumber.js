
const feature = [
    `--format ${
    process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
    }`,
];

module.exports = {
    default: feature
}
