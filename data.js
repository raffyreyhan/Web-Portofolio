/* =====================================================================
   FILE INI SATU-SATUNYA YANG PERLU ANDA EDIT UNTUK MENGISI KONTEN.
   Ganti teks di dalam tanda kutip "..." dengan data Anda.
   Jangan hapus tanda kutip, koma, atau kurung.
   ===================================================================== */

const PROFILE = {
  name: "Raffy Reyhan Ramadhana",
  role: "Data Analyst · Data Scientist",
  tagline: "Electrical Engineer transitioning into Data Analysis and Machine Learning, turning industrial data into decisions.",
  photo: "files/B9.jpg",
  about:
    "Electrical Engineering graduate transitioning into data. I combine a background in industrial instrumentation and manufacturing with practical skills in Python, Data Analysis, and Machine Learning to turn data into actionable insights. ",

  // --- Kontak (kosongkan dengan "" jika tidak ingin ditampilkan) ---
  github:   "https://github.com/raffyreyhan",
  linkedin: "https:/www.linkedin.com/in/raffy-reyhan-ramadhana-724070364",
  email:    "raffyreyhan2902@gmail.com",
  phone:    "",

  // --- Lokasi repository GitHub tempat situs ini disimpan ---
  // Format: "USERNAME/NAMA_REPO". Dipakai untuk membuat tombol "Lihat di GitHub".
  repo: "raffyreyhan/Web-Portofolio",
  branch: "main"
};

/* =====================================================================
   MODUL & PROYEK
   Setiap file diberi "path" = lokasi file di dalam folder situs ini.
   Jenis file dikenali otomatis dari akhiran:
     .py    -> tombol "Lihat Kode"
     .ipynb -> tombol "Buka Notebook"
     .pptx  -> tombol "Lihat Slide" + "Unduh"
   ===================================================================== */
const MODULES = [
  {
    id: "python",
    title: "Module 1 · Python Fundamentals",
    desc: "Core Python programming: data structures, functions, input validation, and building a complete menu-driven program.",
    skills: ["Python", "Functions", "Data Structures", "Input Validation", "CRUD"],
    projects: [
      {
        title: "Raffy Hospital: Doctor Schedule Management System",
        desc: "A menu-driven Python program for managing doctor schedules. It supports searching, adding, updating, and deleting records, with auto-generated doctor IDs, room assignment per clinic, and validation of every user input.",
        tags: ["Python", "CRUD", "Data Structures", "Validation"],
        files: [
          { label: "Source code (main.py)", path: "files/python/main.py" }
        ]
      }
    ]
  },
  {
    id: "analysis",
    title: "Module 2 · Data Analysis",
    desc: "Cleaning, exploring, and visualizing data to answer business questions. Each project is presented as an executive deck (slides are in Indonesian).",
    skills: ["Pandas", "Data Cleaning", "Data Visualization", "Cohort Analysis", "Business Storytelling"],
    projects: [
      {
        title: "HR Employee Attrition Analysis",
        desc: "Analysis of 1,470 employees to find who leaves and why. Overall attrition is 16.1%, concentrated in low-income roles, early tenure, and high workload (Sales Representatives reach 39.8%), with retention recommendations for HR leadership.",
        tags: ["HR Analytics", "EDA", "Visualization"],
        files: [
          { label: "Presentation", path: "files/slides/HR_Employee_Attrition_Analysis.pptx" }
        ]
      },
      {
        title: "Kopi Nusantara Business Review 2024–2025",
        desc: "Business review of 8,371 transactions across 8 coffee-shop branches. Revenue grew 71% in 2025, driven entirely by transaction volume, while average order value fell 5.4% in Q4 as baskets shrank.",
        tags: ["Retail Analytics", "Revenue", "AOV"],
        files: [
          { label: "Presentation", path: "files/slides/Kopi_Nusantara_Business_Review_2024_2025.pptx" }
        ]
      },
      {
        title: "Ride-Hailing Cohort Analysis",
        desc: "Acquisition cohort analysis of 9,934 customers (Jan 2024 – Jan 2025). First-time riders dropped 87% over 2024, and only about 16% of customers remain active in the month after their first ride.",
        tags: ["Cohort Analysis", "Retention", "Growth"],
        files: [
          { label: "Presentation", path: "files/slides/Ride_Hailing_Cohort_Analysis.pptx" }
        ]
      },
      {
        title: "World Happiness Report: Indonesia 2021–2025",
        desc: "Trend and indicator analysis of Indonesia's happiness score, which rose from 5.240 to 5.617, benchmarked against ASEAN countries. Notes the limits of drawing conclusions from only five yearly observations.",
        tags: ["Descriptive Statistics", "Correlation", "Benchmarking"],
        files: [
          { label: "Presentation", path: "files/slides/World_Happiness_Report_Indonesia_2021_2025.pptx" }
        ]
      }

      // Sinarmas Land IPL analysis: add back only if you have permission to publish it.
      // , {
      //   title: "IPL Billing Delinquency Analysis (Township Management)",
      //   desc: "...",
      //   tags: ["Collections", "Risk Analysis"],
      //   files: [ { label: "Presentation", path: "files/slides/Presentasi_NPI_IPL_SinarmasLand_Updated_Revisi.pptx" } ]
      // }
    ]
  },
  {
    id: "ml",
    title: "Module 3 · Machine Learning",
    desc: "Building and evaluating predictive models for regression and classification, with a focus on interpretation and business decisions (slides are in Indonesian).",
    skills: ["Scikit-learn", "Regression", "Classification", "Lasso", "Logistic Regression", "Model Evaluation"],
    projects: [
      {
        title: "Bank Loan Prediction & Credit Triage",
        desc: "Classified loan approval on 614 applications with KNN, Decision Tree, and Logistic Regression. Credit history was the dominant signal; Logistic Regression was selected to drive an automated approve / review / reject triage simulation.",
        tags: ["Classification", "Logistic Regression", "KNN", "Credit Risk"],
        files: [
          { label: "Presentation", path: "files/slides/Bank_Loan_Prediction_Credit_Triage.pptx" }
        ]
      },
      {
        title: "Boston Housing: Hedonic Price Analysis",
        desc: "Regression on 506 census tracts to explain what shapes home values. Socio-economic status, distance to employment centers, and number of rooms were the strongest associations; compares an interpretable OLS model against machine learning models.",
        tags: ["Regression", "OLS", "Interpretation"],
        files: [
          { label: "Presentation", path: "files/slides/Boston_Housing_Hedonic_Analysis.pptx" }
        ]
      },
      {
        title: "Employee Attrition: People Analytics",
        desc: "Predictive HR analytics on 4,653 employee records. An explainable Logistic Regression model (78.95% accuracy vs. a 65.63% baseline) is compared with other classifiers, with data-quality flags raised along the way.",
        tags: ["Classification", "Logistic Regression", "People Analytics"],
        files: [
          { label: "Presentation", path: "files/slides/Employee_Attrition_People_Analytics.pptx" }
        ]
      },
      {
        title: "House Price Prediction with Lasso",
        desc: "Price prediction for 1,460 homes in Ames, Iowa, using Lasso regression on a log-transformed target. Test RMSE is about $20,000 with R² of 0.928, and results are consistent between cross-validation and the test set.",
        tags: ["Regression", "Lasso", "RMSE", "Cross-Validation"],
        files: [
          { label: "Presentation", path: "files/slides/House_Price_Prediction_Lasso.pptx" }
        ]
      },
      {
        title: "Insurance Claim Fraud Detection",
        desc: "Risk-ranking model for vehicle insurance claims where investigators can review only 10% of cases. Frames fraud detection as a ranking problem on an imbalanced dataset (8.5% fraud), evaluated with PR-AUC and a financial impact simulation.",
        tags: ["Imbalanced Data", "Logistic Regression", "PR-AUC", "Fraud Detection"],
        files: [
          { label: "Presentation", path: "files/slides/Insurance_Claim_Fraud_Detection.pptx" }
        ]
      }
    ]
  }
];
