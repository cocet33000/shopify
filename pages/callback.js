import React from 'react';
import { connect } from 'react-redux';

class Callback_ extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps({ query }) {
        const userAgent = query ? query : 'hoge';
        const client_id = '374c1b129b22debeea8daf896c08e7ec';
        const client_secret = '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';
        const url = 'https://bayashi-test2.myshopify.com/admin/oauth/access_token';
        const code = query.code;
        console.log(code);
        const obj = {
            client_id: client_id,
            client_secret: client_secret,
            code: code,
        };
        const body = JSON.stringify(obj);
        const method = 'POST';
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        fetch(url, { method, headers, body })
            .then((res) => res.json())
            .then(console.log)
            .catch(console.error);
        return { query };
    }

    render() {
        this.props.getInitialProps;
        return <div>hoge</div>;
    }
}

const Callback = connect((state) => state)(Callback_);
export default Callback;
