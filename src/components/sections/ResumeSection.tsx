import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ResumeSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Thomas_Lee_Resume.pdf';
    link.download = 'Thomas_Lee_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-16 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-slate-100 mb-6">Resume</h1>
          <Button 
            onClick={handleDownloadResume}
            className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Professional Profile */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b-2 border-primary">Professional Profile</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Early-career data professional with two years of experience in data science and machine learning, leveraging analytical thinking and technical proficiency to deliver impactful insights. Skilled in Python and machine learning with a strong foundation in statistical analysis for data-driven decision-making and a growing portfolio of applied data science projects.
              </p>
            </CardContent>
          </Card>
          
          {/* Education */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b-2 border-primary">Education</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">University of California, Berkeley</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300">Master of Information and Data Science | 4.0 GPA</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Relevant Coursework: Machine Learning Systems Engineering (Docker, Kubernetes), Natural Language Processing with 
                      Deep Learning, Research Design and Applications for Data and Analysis, Statistics for Data Science
                    </p>
                  </div>
                  <Badge variant="outline" className="text-slate-600 text-center dark:text-slate-400 text-xs">August 2025</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">University of California, Berkeley</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300">B.A. in Computer Science, Minor in Data Science | 3.9 GPA</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Upsilon Pi Epsilon Member: International Computing and Information honor society (top 30% of undergraduates)
                    </p>
                  </div>
                  <Badge variant="outline" className="text-slate-600 text-center dark:text-slate-400 text-xs ">May 2024</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Experience */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b-2 border-primary">Experience</h2>
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">East Bay Municipal Utility District</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">Data Science Intern</p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-1">
                      <li>Designed and deployed a fully tested Python module to streamline the processing of EBMUD’s customer billing data for the Cost of Service (COS) study.</li>
                      <li>Performed sensitivity analyses on rate structures to assess revenue impacts during low water consumption periods, reinforcing trust in rate structure stability with lower service charges.</li>
                      <li>Analyzed customer billing data to answer key policy questions such as typical water usage patterns and the bill impacts of proposed rate structures, informing internal decision making and outreach efforts.</li>
                      <li>Implemented a Python-based likelihood of failure (LOF) model to quantify the rate of pipe degradation, reducing a month-long QA process to seconds and identifying critical data validity issues with RMIDs and missing leak data.</li>
                      <li>Conducted water savings analysis for an advanced metering infrastructure (AMI) initiative, applying Bayesian inference to quantify savings distributions and inform long-term investment strategy.</li>
                      <li>Streamlined AMI vendor data access by implementing an Amazon Redshift-based pipeline, replacing costly $1,500 per request extractions with automated data streaming.</li>
                      <li>Managed data access and privacy workflows for company collaborations with three UC Berkeley research groups, providing mentorship with data analysis and ensuring regulatory compliance.</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="text-slate-600 dark:text-slate-400 text-sm ml-4">May 2024 – Present</Badge>
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Eikon Therapeutics</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">Machine Learning Intern</p>
                    <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-1">
                      <li>Identified 20 promising drug treatment candidates from over 200,000 compounds using an extended isolation forest machine learning model for anomaly detection.</li>
                      <li>Created a neural network architecture with TensorFlow, classifying protein agonists and antagonists with over 84% accuracy from a highly noisy dataset.</li>
                      <li>Engineered a Python-based ETL data pipeline to accelerate data extraction, cleaning, and preprocessing, boosting data request efficiency by 22% for a team of 10+ scientists.</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="text-slate-600 dark:text-slate-400 text-sm ml-4">May 2022 – Aug 2023</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Skills */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b-2 border-primary">Skills</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Programming Languages</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Python (TensorFlow, Keras, NumPyro, XGBoost, NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn), 
                    SQL (MySQL, Amazon Redshift), R, NoSQL (Neo4j)
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Data Visualization and Analysis Tools</h3>
                  <p className="text-slate-700 dark:text-slate-300">Tableau, Power BI, Dash</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Other Tools</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Kubernetes, Docker, AWS, Git/GitHub, HuggingFace, Visual Studio, RStudio
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
