# Getting Started on AWS

You all should have signed up for an AWS account at this point.  You will also need to add a credit card to your AWS account for programmatic access to work, but don't worry – AWS offers the Free Tier for a year, and none of the services we're using will get anywhere near the billing threshold.  I will go over all of the following steps in our tutorial, but let this serve as an outline, at the very least.

## Step 1 - Create an IAM user for yourself
Amazon Web Services secures the physical resources that you provision, and provides several protective measures for the virtual ones, but some things are obviously left to the user.  It is best practice to lock down the root account of your AWS account with Multi-Factor Authentication (MFA), and use an IAM user for regular access.  You will not have programmatic access with your root account (AWS requires Access Keys and Secret Access Keys to authenticate from the console), so this is not an optional step.

Log in to your account.  Use the services menu or the search bar to navigate to the IAM console.
Select Users on the left menu and click Add User.
Be sure to enable Programmatic Access and AWS Management Console Access.  You can autogenerate a password or create one yourself.
On the next screen, select Create Group and add Administrator Access for your user.   Create the group, add your user to it, and go to the review screen.
After you create your user, you will be given the opportunity to download a CSV with your credentials.  MAKE SURE YOU DO THIS.  You will not be given another chance to do so for this user.
You can follow the prompts on the IAM dashboard to set up MFA on your root account and/or meet the other security best practices AWS prompts for.

## Step 2 - Install Python & pip
You need Python (and pip , which comes with Python) installed to install and use the AWS CLI.  Install Python 3.6.x.

### Mac Users:
`brew install python3`

### Windows Users:
https://www.python.org/ftp/python/3.6.4/python-3.6.4.exe
http://docs.python-guide.org/en/latest/starting/install3/win/

## Step 3 - Install the AWS CLI
After getting Python installed, install the AWS CLI.

### Mac Users:
`brew install awscli`

### Windows Users:
There is an installer, but I would suggest installing via pip -
```
$ pip install awscli
$ aws --version
```
If you don't want to use pip or you run into issues, here is the AWS guide for Windows - https://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html.

## Step 3 - Set up your AWS Access Keys for Programmatic Access
Run aws configure -
```
$ aws configure 
AWS Access Key ID [None]: YOURACCESSKEY 
AWS Secret Access Key [None]: YOUR/SECRET/ACCESSKEY
Default region name [None]: us-east-1 
Default output format [None]: ENTER
```

## Step 4 - Install Serverless globally
```
$ npm install -g serverless
$ serverless
```

## Next steps...
If you want, run through the Quick Start tutorial here - https://serverless.com/framework/docs/providers/aws/guide/quick-start/

You can dig around in the Serverless docs, check out examples on GitHub, etc.  Just be aware when you're deploying something to your AWS account.

We will work with and/or talk about the following AWS services:
### Primary:
- AWS Lambda
- DynamoDB
- API Gateway
- Amazon S3
- CloudWatch
- CloudFormation
### Secondary:
- Route 53
### Tertiary (if we get to it, brief overviews):
- EC2/ECS/Elastic Beanstalk
- RDS/ElastiCache
- VPC
- Step Functions
- Cognito
- CodeCommit