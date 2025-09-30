// Projects Data Management System
class ProjectManager {
    constructor() {
        this.projects = [];
        this.currentFilter = 'all';
        this.init();
    }

    async init() {
        await this.loadProjects();
        this.renderProjects();
        this.setupEventListeners();
    }

    async loadProjects() {
        try {
            // In a real implementation, this would fetch from a server or local files
            // For demo purposes, we'll use mock data that simulates file structure
            
            this.projects = [
                {
                    id: 1,
                    title: "Automotive Suspension System",
                    description: "Designed and analyzed a double wishbone suspension system for improved vehicle stability and handling.",
                    image: "E:\Personal\Portfolio\projects\projects-data\project1\photo_2025-09-08_22-22-01.jpg",
                    categories: ["cad", "fea"],
                    tags: ["SolidWorks", "ANSYS", "FEA"],
                    date: "Jan 2023",
                    type: "CAD & Analysis"
                },
                {
                    id: 2,
                    title: "3D Printed Robotic Arm",
                    description: "Developed a 5-DOF robotic arm using additive manufacturing with integrated servo control system.",
                    image: "project2.jpg",
                    categories: ["prototype"],
                    tags: ["3D Printing", "Arduino", "Prototyping"],
                    date: "Mar 2023",
                    type: "Prototype"
                },
                {
                    id: 3,
                    title: "Composite Material Analysis",
                    description: "Research on carbon fiber reinforced polymers for lightweight structural applications in automotive industry.",
                    image: "project3.jpg",
                    categories: ["research"],
                    tags: ["Research", "Materials", "Testing"],
                    date: "Jun 2023",
                    type: "Research"
                },
                {
                    id: 4,
                    title: "Heat Exchanger Design",
                    description: "Optimized shell and tube heat exchanger design for industrial applications using CFD analysis.",
                    image: "project4.jpg",
                    categories: ["cad", "fea"],
                    tags: ["SolidWorks", "CFD", "Thermal"],
                    date: "Aug 2023",
                    type: "CAD & Analysis"
                },
                {
                    id: 5,
                    title: "Wind Turbine Blade",
                    description: "Designed and prototyped composite wind turbine blades for small-scale renewable energy applications.",
                    image: "project5.jpg",
                    categories: ["cad", "prototype"],
                    tags: ["CAD", "Composite", "Prototyping"],
                    date: "Oct 2023",
                    type: "Prototype"
                },
                {
                    id: 6,
                    title: "Vehicle Aerodynamics",
                    description: "Computational fluid dynamics analysis of vehicle aerodynamics for drag reduction and fuel efficiency.",
                    image: "project6.jpg",
                    categories: ["fea", "research"],
                    tags: ["CFD", "Aerodynamics", "Research"],
                    date: "Dec 2023",
                    type: "Research"
                }
            ];

            // Simulate loading delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    }

    renderProjects(filteredProjects = null) {
        const projectsGrid = document.getElementById('projectsGrid');
        const loadingState = document.getElementById('loadingState');
        const emptyState = document.getElementById('emptyState');
        
        const projectsToRender = filteredProjects || this.projects;
        
        // Hide loading state
        loadingState.style.display = 'none';
        
        if (projectsToRender.length === 0) {
            emptyState.style.display = 'block';
            projectsGrid.innerHTML = '';
            return;
        }
        
        emptyState.style.display = 'none';
        
        projectsGrid.innerHTML = projectsToRender.map(project => `
            <div class="project-card" data-category="${project.categories.join(',')}">
                <div class="project-image" style="background-image: url('projects-data/project${project.id}/${project.image}')">
                    <div class="project-overlay">
                        <a href="#" class="view-project" data-project="${project.id}">View Details</a>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-meta">
                        <span><i class="far fa-calendar"></i> ${project.date}</span>
                        <span><i class="fas fa-tag"></i> ${project.type}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                this.setFilter(filter);
            });
        });

        // Project detail links
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-project')) {
                e.preventDefault();
                const projectId = e.target.dataset.project;
                this.showProjectDetails(projectId);
            }
        });
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        // Filter projects
        const filteredProjects = filter === 'all' 
            ? this.projects 
            : this.projects.filter(project => 
                project.categories.includes(filter)
            );
        
        this.renderProjects(filteredProjects);
    }

    showProjectDetails(projectId) {
        const project = this.projects.find(p => p.id == projectId);
        if (project) {
            // In a real implementation, this would show a modal or navigate to a detail page
            alert(`Project Details: ${project.title}\n\n${project.description}`);
        }
    }

    // Method to add new project (for manual addition if needed)
    addProject(projectData) {
        const newProject = {
            id: this.projects.length + 1,
            ...projectData
        };
        this.projects.unshift(newProject);
        this.renderProjects();
    }
}

// File System Integration (for local development)
class FileSystemManager {
    constructor() {
        this.projectsPath = 'projects-data/';
    }

    async scanProjects() {
        // This would scan the projects-data directory in a real implementation
        // For now, we'll return mock data
        return [
            'project1',
            'project2',
            'project3',
            'project4',
            'project5',
            'project6'
        ];
    }

    async readProjectInfo(projectFolder) {
        // This would read the info.txt file in a real implementation
        // Format: title|description|categories|tags|date|type
        const mockData = {
            'project1': 'Automotive Suspension System|Designed and analyzed a double wishbone suspension system...|cad,fea|SolidWorks,ANSYS,FEA|Jan 2023|CAD & Analysis',
            'project2': '3D Printed Robotic Arm|Developed a 5-DOF robotic arm using additive manufacturing...|prototype|3D Printing,Arduino,Prototyping|Mar 2023|Prototype',
            'project3': 'Composite Material Analysis|Research on carbon fiber reinforced polymers...|research|Research,Materials,Testing|Jun 2023|Research',
            'project4': 'Heat Exchanger Design|Optimized shell and tube heat exchanger design...|cad,fea|SolidWorks,CFD,Thermal|Aug 2023|CAD & Analysis',
            'project5': 'Wind Turbine Blade|Designed and prototyped composite wind turbine blades...|cad,prototype|CAD,Composite,Prototyping|Oct 2023|Prototype',
            'project6': 'Vehicle Aerodynamics|Computational fluid dynamics analysis of vehicle aerodynamics...|fea,research|CFD,Aerodynamics,Research|Dec 2023|Research'
        };

        const data = mockData[projectFolder].split('|');
        return {
            title: data[0],
            description: data[1],
            categories: data[2].split(','),
            tags: data[3].split(','),
            date: data[4],
            type: data[5]
        };
    }

    getProjectImage(projectFolder) {
        // This would find the first image file in the project folder
        // For now, return a placeholder
        return `${projectFolder}.jpg`;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectManager();
});

// Export for use in other files (if needed)
window.ProjectManager = ProjectManager;
window.FileSystemManager = FileSystemManager;