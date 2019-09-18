import React from "react";

class GrowRecommendedByText extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
            <blockquote className="blockquote">
                <div className="grow-title">{"It's Recommended because you liked"}</div>
                    <footer className="blockquote-footer text-truncate">
                    {this.props.recommendedBy.map(asset => {
                        return (
                            <a  key={asset.id}
                                className="grow-pdng-right"
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