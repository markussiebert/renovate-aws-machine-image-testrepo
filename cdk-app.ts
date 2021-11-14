const myConfigObject = {
    // With am name mentioned in the comments
    // amiFilter=[{"Name":"owner-id","Values":["602401143452"]},{"Name":"name","Values":["amazon-eks-node-1.21-*"]}]
    // currentImageName=unknown
    my_ami1: 'ami-02ce3d9008cab69cb',
};

/**
 * Only ami, no ami name mentioned
 * amiFilter=[{"Name":"owner-id","Values":["602401143452"]},{"Name":"name","Values":["amazon-eks-node-1.20-*"]}]
 * currentImageName=amazon-eks-node-1.20-v20211109
 */
const my_ami2 = 'ami-03f68e6694037a1bf';
