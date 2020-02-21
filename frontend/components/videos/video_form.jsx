import React from 'react';

export default class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            videoFile: null,
            creator_id: this.props.currentUser
        }
    }

    handleInput(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    handleFile(e) {
        this.setState({videoFile: e.currentTarget.files[0]});
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[description]', this.state.description);
        formData.append('video[video]', this.state.videoFile);
        formData.append('video[creator_id]', this.state.creator_id);
        this.props.createVideo(formData)
            .then(() => {
                this.setState({
                    description: '',
                    videoFile: null
                });
            }).then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} >
                <label htmlFor="video-description">Description</label>
                <input
                    type="text"
                    id="video-description"
                    value={this.state.description}
                    onChange={this.handleInput('description')}/>
                <input 
                    type="file" 
                    onChange={this.handleFile.bind(this)}/>
                <button>Upload Video</button>
            </form>
        );
    }
}