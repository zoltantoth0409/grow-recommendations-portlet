import React from "react";




class GrowTagList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="autofit-section">
        {this.props.articleTags.slice(0, this.props.numOfDisplayed).map((tag, index) => {
          return (
            <span key={index} className="label label-lg text-uppercase">
              <span className="label-info label-item label-item-expand">
                {tag}
              </span>
            </span>
          );
        })
        }
        {this.props.articleTags.length > this.props.numOfDisplayed && 
          (
              <span
                className="label label-lg text-uppercase label-remaining-tags"
                data-toggle="tooltip"
                data-placement="right"
                title={this.props.articleTags.slice(this.props.numOfDisplayed, this.props.articleTags.length)}
              >
                <span className="label-info label-item label-item-expand">
                  + {this.props.articleTags.length - this.props.numOfDisplayed}
                </span>
              </span>
          )
        }
      </div>
    );
  }
}

GrowTagList.defaultProps = 
{
  numOfDisplayed : 3,
}

export default GrowTagList;
