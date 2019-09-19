import React from "react";

class GrowRecommendedByText extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <blockquote className="blockquote">
                <div className="grow-recommendedby-title">{"It's Recommended because you liked"}</div>
                    <footer className="blockquote-footer text-truncate">
                    {this.props.recommendedBy.map(asset => {
                        return (
                            <a  key={asset.id}
                                className="grow-recommendedby-subtitle"
                                href={
                                    this.props.portalUrl +
                                    "/" +
                                    asset.articleCategory +
                                    "/" +
                                    asset.articleTitle
                                    .split(" ")
                                    .join("+")
                                    .toLowerCase()
                                }>
                                <cite title="Source Title">'{asset.articleTitle}'</cite>
                            </a>
                        );
                    })}
                    </footer>
            </blockquote>
        )
    }
}

export default GrowRecommendedByText;