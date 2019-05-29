import React from "react";
import ReactDOM from "react-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import GrowCard from './modules/GrowCard.es';

const spritemap = Liferay.ThemeDisplay.getPathThemeImages();

const mockupData = {
    "data": [
        {
            "articleAuthor": "Gábor Ambrózy",
            "authorAvatar": "/o/GrowRecommendationsPortlet/images/0.jpeg",
            "createDate": "01.01.2019",
            "articleTitle": "Respect badge",
            "articleContent":
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "tags": ["badge", "gamification", "respect", "test1", "test2"],            
            "readCount": "626",
            "articleCategory": "Share"
        },
        {
            "articleAuthor": "Gábor Ambrózy",
            "authorAvatar": "/o/GrowRecommendationsPortlet/images/0.jpeg",
            "createDate": "01.01.2019",
            "articleTitle": "Respected badge",
            "articleContent":
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "tags": ["badge", "gamification", "respect", "test1", "test2"],            
            "readCount": "626",
            "articleCategory": "Excellence"
        },
        {
            "articleAuthor": "Gábor Ambrózy",
            "authorAvatar": "/o/GrowRecommendationsPortlet/images/0.jpeg",
            "createDate": "01.01.2019",
            "articleTitle": "Badge of Respect",
            "articleContent":
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "tags": ["badge", "gamification", "respect", "test1", "test2"],            
            "readCount": "626",
            "articleCategory": "People"
        },
        {
            "articleAuthor": "Gábor Ambrózy",
            "authorAvatar": "/o/GrowRecommendationsPortlet/images/0.jpeg",
            "createDate": "01.01.2019",
            "articleTitle": "RB",
            "articleContent":
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "tags": ["badge", "gamification", "respect", "test1", "test2"],            
            "readCount": "626",
            "articleCategory": "Share"
        },
        {
            "articleAuthor": "Gábor Ambrózy",
            "authorAvatar": "/o/GrowRecommendationsPortlet/images/0.jpeg",
            "createDate": "01.01.2019",
            "articleTitle": "RB-5",
            "articleContent":
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            "tags": ["badge", "gamification", "respect", "test1", "test2"],            
            "readCount": "626",
            "articleCategory": "Share"
        }
    ]
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = 
			{
				data: mockupData.data,
				spritemap: spritemap
			};
	  }

	render() {
		return (
			<CarouselProvider
				naturalSlideWidth={30}
				naturalSlideHeight={20}
                totalSlides={5}
                visibleSlides={3}
			>
				<Slider>
					{this.state.data.map((growCardData, key) => 
						<Slide index={key} key={key}>
								<GrowCard
									spritemap={this.state.spritemap}
									articleAuthor={growCardData.articleAuthor}
									articleAuthorAvatar={growCardData.authorAvatar}
									articleCreateDate={growCardData.createDate}
									articleTitle={growCardData.articleTitle}
									articleContent={growCardData.articleContent.substr(0, 120) + "..."}
									articleTags={growCardData.tags}
									articleReadCount={growCardData.readCount}
									articleCategory={growCardData.articleCategory}
								/>
						</Slide>
					)}
				</Slider>		
                <ButtonBack>Back</ButtonBack>		
				<ButtonNext>Next</ButtonNext>
			</CarouselProvider>
		);
	}
}

export default function(elementId) {
	ReactDOM.render(<App />, document.getElementById(elementId));
}