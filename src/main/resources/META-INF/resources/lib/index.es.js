import React from "react";
import ReactDOM from "react-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import GrowCard from './modules/GrowCard.es';
import GrowIcon from "./modules/GrowIcon.es";

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

        this.handleWindowResize = this.handleWindowResize.bind(this);
        this.setVisibleSlides = this.setVisibleSlides.bind(this);

		this.state = 
			{
				data: mockupData.data,
                spritemap: spritemap,
                visibleSlides: this.computeVisibleSlides()
            };
    }

    componentWillUnmount() {
        window.clearTimeout(this.throttle);
        window.removeEventListener('resize', this.handleWindowResize, false);
      }
    
      componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize, false);
      }
    
      computeVisibleSlides() {
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
        switch (width) {
            case width < 768:
                return 2;
              case width < 480:
                return 1;
              default:
                return 3;
        }
      }
    
      setVisibleSlides() {
        const visibleSlides = this.setState({visibleSlides});
      }
    
      handleWindowResize() {
        window.clearTimeout(this.throttle);
        this.throttle = window.setTimeout(this.setVisibleSlides);
      }
        
	render() {
		return (
			<CarouselProvider
                className={"grow-recommendations-carousel"}
				naturalSlideWidth={30}
				naturalSlideHeight={30}
                totalSlides={5}
                visibleSlides={this.state.visibleSlides}
			>
                <ButtonBack
                    className={"carousel-button-back"}>
                    <GrowIcon
                        spritemap={spritemap}
                        classes="lexicon-icon inline-item"
                        iconName="angle-left"
                        />
                </ButtonBack>
				<Slider>
					{this.state.data.map((growCardData, key) => 
						<Slide index={key} key={key}>
								<GrowCard
									spritemap={this.state.spritemap}
									articleAuthor={growCardData.articleAuthor}
									articleAuthorAvatar={growCardData.authorAvatar}
									articleCreateDate={growCardData.createDate}
									articleTitle={growCardData.articleTitle}
									articleContent={growCardData.articleContent}
									articleTags={growCardData.tags}
									articleReadCount={growCardData.readCount}
									articleCategory={growCardData.articleCategory}
								/>
						</Slide>
					)}
				</Slider>		
				<ButtonNext
                    className={"carousel-button-next"}>
                    <GrowIcon
                        spritemap={spritemap}
                        classes="lexicon-icon inline-item"
                        iconName="angle-right"
                        />
                </ButtonNext>
			</CarouselProvider>
		);
	}
}

export default function(elementId) {
	ReactDOM.render(<App />, document.getElementById(elementId));
}