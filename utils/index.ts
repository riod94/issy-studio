function slugify(text: string) {
    return text
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/^-+/, "")
        .replace(/-+$/, "");
}

function unslugify(text: string) {
    return text
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

export { slugify, unslugify };