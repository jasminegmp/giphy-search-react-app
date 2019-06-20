import React from 'react'
import GifList from './GifList'
import GifCard from './GifCard'
import './GifDetailsPage.css'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  EmailIcon,
} from 'react-share';

class GifDetailsPage extends React.Component {

	constructor(props){
		super(props);
		this.goBack = this.goBack.bind(this);
	}

	goBack(){
		this.props.history.goBack();
	}
  render() {
    //console.log("here", this.props.location, this.props)
    console.log(this.props.location.bitly_gif_url)
    return (
    	<div className = "gif-detail">
	    	<div className = "gif-large">
		    	<img src = {this.props.location.id}/>
		    </div>
		    <span className = "share-area">
				<FacebookShareButton className = "share-button" url={this.props.location.bitly_gif_url}>
					<FacebookIcon size={32} round />
				</FacebookShareButton>
				<TwitterShareButton className = "share-button" url={this.props.location.bitly_gif_url}>
					<TwitterIcon size={32} round />
				</TwitterShareButton>
				<RedditShareButton className = "share-button" url={this.props.location.bitly_gif_url}>
					<RedditIcon size={32} round />
				</RedditShareButton>
				<PinterestShareButton className = "share-button" url={this.props.location.bitly_gif_url}>
					<PinterestIcon size={32} round />
				</PinterestShareButton>
				<LineShareButton className = "share-button" url={this.props.location.bitly_gif_url}>
					<LineIcon size={32} round />
				</LineShareButton>
				<EmailShareButton className = "share-button" url={this.props.location.bitly_gif_url}>
					<EmailIcon size={32} round />
				</EmailShareButton>
			</span>
		    <div className = "back-area">
		    	<button className="ui button" onClick={this.goBack}>Go Back</button>
	    	</div>
    	</div>
    )
  } 
}

export default GifDetailsPage;