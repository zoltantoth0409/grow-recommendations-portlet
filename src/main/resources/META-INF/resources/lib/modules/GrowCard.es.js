import React from "react";
import GrowIcon from "./GrowIcon.es";
import GrowCardFooter from "./GrowCardFooter.es.js";

class GrowCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      star: false,
      like: false
    };
    // This binding is necessary to make `this` work in the callback
    this.toggleStarContent = this.toggleStarContent.bind(this);
    this.toggleLikeContent = this.toggleLikeContent.bind(this);
  }

  toggleStarContent() {
    this.setState(state => ({
      star: !state.star
    }));
  }
  toggleLikeContent() {
    this.setState(state => ({
      like: !state.like
    }));
  }

  render() {
    return (
      <div
        className={"grow-card card card-" + this.props.articleCategory.toLowerCase()}
      >
        <div className="card-body">
          <div className="autofit-row autofit-padded mb-2">
            <div className="autofit-col">
              <div className="autofit-section">
                <img
                  alt="Author's thumbnail"
                  className="img-fluid sticker sticker-primary sticker-xl rounded-circle"
                  src={this.props.articleAuthorAvatar}
                />
              </div>
            </div>
            <div className="autofit-col autofit-col-expand">
              <div className="autofit-section text-secondary">
                <strong>{this.props.articleAuthor}</strong>
                <br />
                <span>{this.props.articleCreateDate}</span>
              </div>
            </div>
            <div className="autofit-col">
              <div className="autofit-section">
                <button
                  className="btn btn-outline-secondary btn-outline-borderless"
                  type="button"
                  onClick={this.toggleStarContent}
                >
                  {this.state.star && (
                    <GrowIcon
                      spritemap={this.props.spritemap}
                      classes="lexicon-icon inline-item"
                      iconName="star"
                    />
                  )}
                  {this.state.star == false && (
                    <GrowIcon
                      spritemap={this.props.spritemap}
                      classes="lexicon-icon inline-item"
                      iconName="star-o"
                    />
                  )}
                </button>

                <button
                  className="btn btn-outline-secondary btn-outline-borderless"
                  type="button"
                  onClick={this.toggleLikeContent}
                >
                  {this.state.like && (
                    <GrowIcon
                      spritemap={this.props.spritemap}
                      classes="lexicon-icon thumbs-up-liked"
                      iconName="thumbs-up"
                    />
                  )}
                  {this.state.like == false && (
                    <GrowIcon
                      spritemap={this.props.spritemap}
                      classes="lexicon-icon"
                      iconName="thumbs-up"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="autofit-row autofit-padded">
            <div className="autofit-col autofit-col-expand">
              <div className="autofit-section">
                <h2>{this.props.articleTitle}</h2>
              </div>
            </div>
          </div>

          <div className="autofit-row autofit-padded">
            <div className="autofit-col autofit-col-expand">
              <div className="autofit-section">
                <div className="text-secondary">
                  {this.props.articleContent}
                </div>
              </div>
            </div>
          </div>
          <GrowCardFooter
            articleTags={this.props.articleTags}
            spritemap={this.props.spritemap}
            articleReadCount={this.props.articleReadCount}
            articleCategory={this.props.articleCategory}
          />
        </div>
      </div>
    );
  }
}

export default GrowCard;
