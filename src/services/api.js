import axios from 'axios';

export default axios.create({
    baseURL: 'http://app-test.us-east-2.elasticbeanstalk.com'
});