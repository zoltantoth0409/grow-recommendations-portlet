import React from "react";
import ReactDOM from "react-dom";
import ReactResizeDetector from 'react-resize-detector';
import axios from 'axios';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import GrowCard from './modules/GrowCard.es';
import GrowIcon from "./modules/GrowIcon.es";

const SPRITEMAP = Liferay.ThemeDisplay.getPathThemeImages();
const API = 'https://jsonplaceholder.typicode.com';
const DEFAULT_QUERY = '/todos/1';

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

		this.state = {
			data: [],
			totalSlides: 1,
			visibleSlides: 1,
			isLoading: false,
			error: null
        };
		
		this.setVisibleSlides = this.setVisibleSlides.bind(this);
        this.onResize = this.onResize.bind(this);
    }

    setVisibleSlides(visibleSlides) {
        if (visibleSlides != this.state.visibleSlides) {
            this.setState({
                visibleSlides: visibleSlides,
                loading:false
            });
        }
    }
    
    onResize(width) {
        if (width <= 640) {
            return this.setVisibleSlides(1);
        }
        else if (width <= 960) {
            return this.setVisibleSlides(2);
        }
        else {
            return this.setVisibleSlides(3);
        }
    }
	
	componentDidMount() {
		this.setState({ isLoading: true });

		setTimeout(() => {
		axios.get(API + DEFAULT_QUERY)
			.then(
				response => {
					this.setState({ 
						data: mockupData.data,
						totalSlides: mockupData.data.length,
						isLoading: false })
				}
			)
			.catch(function(error) {
				this.setState({ error: error, isLoading: false });
				Liferay.Util.openToast(
					{
						message: error,
						title: Liferay.Language.get('error'),
						type: 'danger'
					}
				);
			});
			
		}, 500);
	}

	render() {
		
		const {isLoading, error } = this.state;
		
		return (
			<div className="grow-recommendations-porltet">
				<div className="container">
				
					{isLoading && (
						<div className="loading-indicator">
							<span aria-hidden="true" className="loading-animation"></span>
						</div>
					)}
				
					<ReactResizeDetector handleWidth onResize={this.onResize} />
					
					<CarouselProvider
						className={"grow-recommendations-carousel"}
						naturalSlideWidth={375}
						naturalSlideHeight={390}
						totalSlides={this.state.totalSlides}
						visibleSlides={this.state.visibleSlides}
					>
						<ButtonBack
							className={"carousel-button-back"}>
							<GrowIcon
								spritemap={SPRITEMAP}
								classes="lexicon-icon inline-item"
								iconName="angle-left"
							/>
						</ButtonBack>
						<Slider>
							{this.state.data.map((growCardData, key) => 
								<Slide index={key} key={key}>
									<GrowCard
										spritemap={SPRITEMAP}
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
								spritemap={SPRITEMAP}
								classes="lexicon-icon inline-item"
								iconName="angle-right"
							/>
						</ButtonNext>
					</CarouselProvider>
				</div>
			</div>
		);
	}
}

export default function(elementId) {
	ReactDOM.render(<App />, document.getElementById(elementId));
}