export interface Project {
  id: string;
  title: string;
  description: string;
  repolink: string;
  repodesc: string;
  image: string;
  technologies: string[];
  overview: string;
  implementation: string[];
  results: string[];
  pdffile: string;
  pdfwidth:string;
  pdfheight:string;
}

export const projects: Project[] = [
  {
    id: "pokemon-tcg-power-level",
    title: "RoBERTa and BERT Pokémon Trading Card Game Card Power and Synergy Prediction",
    description: "Applying large language models to predict Pokémon card strength and synergy with other cards prior to observed gameplay.",
    repolink: "https://github.com/thomascl24/roberta-bert-pokemon-tcg-nlp",
    repodesc: "Link to repository: ",
    image: "pokemon_tcg_logo.png",
    technologies: ["Python", "Tensorflow", "PyTorch", "BERT", "RoBERTa", "numpy", "pandas", "scikit-learn", "scipy"],
    overview: "The Pokémon Trading Card Game (TCG) is a dynamic and competitive collectible card game featuring thousands of unique cards, frequent expansions, and an evolving set of tournament-legal cards. In such a rapidly shifting environment, understanding card synergy and predicting usage trends have become vital for competitive success. This project applies modern NLP machine learning techniques to historical tournament data and card metadata to identify synergies between cards and forecast their future usage in competitive play. Our models aim to quantify relationships between cards, assess their potential utility in evolving metagames, and provide players with a data-driven edge. These findings have applications in competitive analytics, deck-building tools, and strategic planning. The main data sources for this project are a list of all Pokémon cards from 1999 to 2023 (over 17,000 cards) and a list of all competitive Pokémon deck lists used in tournaments from 2011 to 2023. We input the raw text from each of these cards (card type, description, abilities, etc.) into our models. We use the tournament data to validate our model results.",
    implementation: [
      "Trained RoBERTa and BERT models with Huber loss for greater robustness against label noise and outlier values",
      "Used grid search hyperparameter tuning to find optimal parameter values for models",
      "Used Tensorflow, pandas, and numpy for data preprocessing and feature engineering to transform raw text data into card embeddings",
      "Analyzed attention outputs of models to ensure meaningful card embedding representations",
      "Model validation using cross-validation",
      "Performance evaluation using precision and F1-score"
    ],
    results: [
      "57% and 61% precision in identifying the top 100 most powerful Pokémon and trainer cards respectively",
      "0.53 F1 in the top 100 most powerful cards",
      "Lower mean absolute errors of 0.0044 and 0.0526 compared to baselines of 0.0056 and 0.0575",
      "Identified several thousand potential new synergies not yet discovered by players",
    ],
    pdffile:'pkmpaper.pdf',
    pdfwidth:"800px",
    pdfheight:"2100px"

  },
  {
    id: "sf-crime-dashboard",
    title: "Exploring Crime Patterns and Trends in San Francisco",
    description: "Interactive dashboards to visualize spacial and temporal trends of San Franscisco crime.",
    repolink: "https://apps.ischool.berkeley.edu/~thomascl/w209/",
    repodesc: "Link to webpage: ",
    image: "GoldenGateBridge-001.jpg",
    technologies: ["Tableau", "HTML", "CSS", "JavaScript", "TypeScript"],
    overview: "Crime is a reality in every city, and the level of crime within a particular city can influence decisions like where individuals choose to live and how leaders decide to allocate resources. This is highly evident in a city like San Francisco, where the level of crime can range greatly from one neighborhood to the next. Our group has created an interactive dashboard of crime in San Francisco. The information presented in this dashboard serves as an effective tool for stakeholders interested in community revitalization in San Francisco.",
    implementation: [
      "Utilized Tableau to create interactive dashboards",
      "Time series plots to show crime trends by neighborhood and crime type",
      "Geographic heat maps to show crime distributions across San Francisco"
    ],
    results: [
      "San Francisco crime is trending downwards overall, but some crime types are on the rise, such as assault, motor vehicle theft, and drug offenses",
      "Crime in all neighborhoods except for the Tenderloin is trending downwards",
      "Fewer crimes occur on the weekends compared to the weekdays",
      "The South of Market neighborhood has the highest total number of incidents"
    ],
    pdffile:'',
    pdfwidth:"0px",
    pdfheight:"0px"
  },
  {
    id: "mushroom",
    title: "XGBoost for Poisonous Mushroom Classification",
    description: "Classifying poisonous versus non-poisonous mushrooms using features on physical appearance.",
    repolink:'https://github.com/thomascl24/poisonous-mushrooms-classification',
    repodesc: "Link to repository: ",
    image: "mushrooms.jpg",
    technologies: ["Python", "XGBoost", "Tensorflow", "numpy", "pandas", "scikit-learn"],
    overview: "As a layperson, it can be difficult to determine whether a wild mushroom is poisonous or not. Mushrooms often have very similar appearances but very different toxicity levels, which makes identification notoriously difficult and the consequences of false classification deadly.",
    implementation: [
      "Exploratory data analysis revealed which features have the greatest class imbalances and which features have high correlations with other features",
      "Conducted chi-squared tests for feature selection",
      "Trained scikit-learn random forest model and XGBoost models with mushroom appearance features as input and toxicity levels as output",
      "Used grid search cross validation to find optimal hyperparameter values for models",
      "Visualized results in ROC curves and accuracy per epoch"
    ],
    results: [
      "Achieved 100% recall on test set, indicating zero incorrectly classified poisonous mushrooms",
      "Achieved 99.7% accuracy on test set"
    ],
    pdffile:'',
    pdfwidth:"0px",
    pdfheight:"0px"
  },
  {
    id: "food",
    title: "Sustainable Food Delivery Using Public Transportation",
    description: "Creating a NoSQL Neo4j database to optimize routes for food delivery.",
    repolink:'https://github.com/thomascl24/public-transportation-food-delivery',
    repodesc: "Link to repository: ",
    image: "bart.jpg",
    technologies: ["Neo4j", "NoSQL", "PostgreSQL", "Python"],
    overview: "Throughout the Fundamentals of Data Engineering course, we develop a delivery service for a hypothetical company called Acme Gourmet Meals (AGM). The product and purchase data for this company was stored in PostgreSQL relational tables. As the final project for this class, our group decided to create a NoSQL Neo4j database to find optimized routes for food delivery services that take advantage of the BART system. This would be an eco-friendly solution for customers that would still like their food delivered straight to their door.",
    implementation: [
      "Constructed a graph using Neo4j with customers, stores, and BART station nodes",
      "Applied Dijkstra's algorithm to optimize for different objective functions, such as travel time or travel cost",
      "Applied betweenness centrality to identify key transit stations that act as crucial intermediaties in the network",
      "Applied harmonic centrality to identify most accessible transit stations for choosing new AGM locations",
      "Different objectives can be optimized for easily by changing edge weights between stations and customers"
    ],
    results: [
      "Able to efficiently find the distance from each customer to their closest BART station, through the BART network, then to the closest AGM location",
      "Identified top three best locations for opening new AGM stores",
    ],
    pdffile:'',
    pdfwidth:"0px",
    pdfheight:"0px"

  },
  {
    id: "voting",
    title: "A Statistical Analysis of Voting Difficulty in Democrat and Republican Voters",
    description: "Do Democrat voters or Republican voters experience more difficulty voting?",
    repolink:'https://github.com/thomascl24/voting-difficulty',
    repodesc: "Link to repository: ",
    image: "dem_rep.jpg",
    technologies: ["R", "ggplot2", "dplyr", "Hypothesis Testing"],
    overview: "Voting difficulty is a critical issue in the study of electoral behavior and democratic participation. Having difficulty deciding who to vote for can impact voter turnout, election outcomes, and the overall health of a democracy. Our group wanted to determine whether Democrat or Republican voters find it more difficult to vote for their party's presidential candidate. We used the ANES 2022 survey data for this research. Survey participants answered several quuestions such as their political affiliation and who they plan on voting for in 2024.",
    implementation: [
      "Built a data pipeline in R to remove individuals not relevant to the study, such as non-registered voters and individuals with no political affiliation. Further removed samples with incomplete data on features of interest.",
      "Assigned individuals to be in the Democrat or Republican party according to survey answers",
      "Applied Welch's two-sample t-test and Wilcoxon rank sum test to compare voting difficulty between individuals assigned to be Democrat versus Republican",
      "Ensemble methods combining multiple approaches",
      "Risk management and portfolio optimization"
    ],
    results: [
      "Hypothesis tests failed to reject the null using a 0.05 p-value threshold, indicating that there is not conclusive evidence of difficulty in voting between Republicans and Democrats using this survey data"
    ],
    pdffile:'203_Project_Rep_vs__Dem.pdf',
    pdfwidth:"800px",
    pdfheight:"2100px"

  }
];

export interface Repository {
  name: string;
  description: string;
  language: {
    name: string;
    color: string;
  };
  repolink: string;
}

export const repositories: Repository[] = [
  {
    name: "thomascl24/roberta-bert-pokemon-tcg-nlp",
    description: "Using LLMs to enable early card power level and synergy analysis",
    language: { name: "Python", color: "bg-yellow-400" },
    repolink: 'https://github.com/thomascl24/roberta-bert-pokemon-tcg-nlp'
  },
  {
    name: "thomascl24/poisonous-mushrooms-classification",
    description: "Using machine learning models to predict mushroom toxicity",
    language: { name: "Python", color: "bg-yellow-400" },
    repolink: 'https://github.com/thomascl24/poisonous-mushrooms-classification'
  },
  {
    name: "thomascl24/public-transportation-food-delivery",
    description: "NoSQL Neo4j database to compute optimized food delivery routes usingg public transportation",
    language: { name: "Python", color: "bg-yellow-500" },
    repolink: 'https://github.com/thomascl24/public-transportation-food-delivery'
  },
  {
    name: "thomascl24/voting-difficulty",
    description: "Comparing difficulty voting between Democrats and Republicans",
    language: { name: "R", color: "bg-blue-400" },
    repolink: 'https://github.com/thomascl24/voting-difficulty'
  }
];
