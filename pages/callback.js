import React from 'react';
import { connect } from 'react-redux';

class Callback_ extends React.Component {
    constructor(props) {
        super(props);
    }

    static async getInitialProps({ query }) {
        const userAgent = query ? query : 'hoge';
        const client_id = 'ef116a9b15859c31f10a8a6218872712';
        const client_secret = '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';
        const url = 'https://bayashi-test2.myshopify.com/admin/oauth/access_token';
        const code = query.code;
        console.log(code);
        const data = {
            client_id: client_id,
            client_secret: client_secret,
            code: code,
        };
        const headers = {
            Accept: 'application/json',
        };
        const method = 'POST';
        fetch(url, { method, headers, data })
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
