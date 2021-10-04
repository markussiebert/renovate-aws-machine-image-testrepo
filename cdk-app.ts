const myConfigObject = {
  # With am name mentioned in the comments
  # amiFilter=[{"Name":"owner-id","Values":["602401143452"]},{"Name":"name","Values":["amazon-eks-node-1.21-*"]}]
  # currentImageName=amazon-eks-node-1.21-v20211001
  my_ami1: ami-0bd3ec9bf52e69894
};

# Only ami, no ami name mentioned
# amiFilter=[{"Name":"owner-id","Values":["602401143452"]},{"Name":"name","Values":["amazon-eks-node-1.20-*"]}]
# currentImageName=unknown
const my_ami2 = ami-0083e9407e275acf2
