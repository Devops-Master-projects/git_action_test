provider "aws" {
   region = "us-east-1" 
}

resource "aws_vpc" "action" {
  cidr_block = "10.0.0.0/16"

 tags = {
    Name = "class30"
 }



#create s3 bucket
provider "aws" {
  region = "us-east-1"
}

module "s3_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"

  bucket = "class30s3b"
  acl    = "private"

  versioning = {
    enabled = true
  }
}
}
