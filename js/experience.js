document.addEventListener('DOMContentLoaded', function() {
    const industryBtn = document.getElementById('industryBtn');
    const dodBtn = document.getElementById('dodBtn');
    const experienceContent = document.getElementById('experienceContent');

    // Store the industry version (current content)
    const industryContent = experienceContent.innerHTML;    // DoD version of the content
    const dodContent = `
        <div class="feature col">
            <h3 class="fs-5 text-body-emphasis">May 2025 - Present <br> Microsoft Fellow, AI Engineer <br> Microsoft</h3>
            <ul>
                <li>Contributed to the design and development of a cloud-native, AI enabled application utilizing Azure AI Foundry, Azure Open AI Service, C#, Python, and the Semantic Kernel SDK creating advanced generative AI solutions to enable security operations.</li>
                <li>Leveraged open-source tools to conduct comparative evaluations between conventional software analysis techniques and AI-powered approaches, establishing and implementing effective evaluation criteria.</li>
                <li>Implemented end-to-end solutions leveraging HTML, CSS, JavaScript, C#, and Azure Functions, ensuring robust integration and seamless user experiences within Azure environments.</li>
            </ul>
        </div>
        <div class="feature col">
            <h3 class="fs-5 text-body-emphasis">2022 - 2025 <br> Captain – Major <br> Director Development Operations Group <br> Marine Corps Forces Cyberspace Command</h3>
            <ul>
                <li>Led a team of 30+ developers to ensure the secure development and timely delivery of multiple cyberspace capabilities, significantly improving supported command operational capabilities.</li>
                <li>Developed multiple Infrastructure as Code (IaC) solutions, automating the deployment and secure configuration of IT infrastructure, drastically reducing time and costs associated with conducting cyberspace operations and enhancing the overall cybersecurity posture of the organization.</li>
                <li>Developed and established multiple secure development policies, processes, and design templates, significantly maturing and professionalizing the organization, reducing project delivery timelines and enhancing product security.</li>
            </ul>
        </div>
        <div class="feature col">
            <h3 class="fs-5 text-body-emphasis">2019 - 2022 <br> Chief Warrant Officer 3 – Captain <br> Capabilities Lead, Cyber Tactical Operations Center <br> Joint Force Headquarters Cyber Marines</h3>
            <ul>
                <li>Oversaw the development of 100+ cyberspace capabilities, throughout all phases of USCYBERCOMMAND's capability development lifecycle, ensuring the cost and time effective delivery of high-quality capabilities, bolstering supported command's capability portfolio and enabling the completion of mission objectives.</li>
                <li>Established and maintained strong supported unit / customer relationships, ensuring capability development aligned with their mission objectives and capability gaps.</li>
                <li>Implemented automated workflows and promoted knowledge sharing through collaborative tools, streamlining business processes and improving delivery timelines.</li>
            </ul>
        </div>
        <div class="feature col">
            <h3 class="fs-5 text-body-emphasis">2016 - 2019 <br> Senior Cybersecurity Assessments Manager <br> By Light Professional IT Services</h3>
            <ul>
                <li>Led By Light to achieve HITRUST External Assessor certification, resulting in a substantial increase in client acquisition and enhancing By Light's reputation in healthcare security compliance.</li>
                <li>Led and conducted multiple HITRUST CSF assessments at By Light, coordinating cross-functional teams to ensure thorough compliance evaluations, resulting in successful client certifications and continued client re-engagements.</li>
                <li>Developed methodologies and standard operating procedures for hunt, vulnerability assessment, and penetration testing at By Light, enhancing efficiency and effectiveness of security assessments.</li>
            </ul>
        </div>
        <div class="feature col">
            <h3 class="fs-5 text-body-emphasis">2014 - 2019 <br> Warrant Officer – Chief Warrant Officer 3 <br> Cyber Network Warfare Planner <br> Marine Corps Forces Cyber Command</h3>
            <ul>
                <li>Led a team of 40 cybersecurity experts in dozens of incident response, threat hunting, vulnerability assessment, and compliance engagements, successfully securing critical DoD infrastructure against sophisticated threat actors.</li>
                <li>Developed long-term proactive controls resulting in the mitigation of millions of dollars in damages and data loss from Department of Defense networks.</li>
                <li>Developed and instructed over 120 hours of CPT 1000 and 2000-level training to over 60 Department of Defense Information Network (DODIN), Combatant Command (COCOM), National, and Service CPT members.</li>
            </ul>
        </div>
        <div class="feature col">
            <h3 class="fs-5 text-body-emphasis">2012 - 2014 <br> Staff Sergeant <br> Network Security Analyst / DCO Planner <br> United States Cyber Command</h3>
            <ul>
                <li>Conducted Network Security Monitoring of over 300,000 hosts across three classification domains, identifying and mitigating threats and ensuring the security of critical DoD networks.</li>
                <li>Developed and provided over 120 hours of training to more than 100 DoD personnel on network intrusion analysis and Hunt methodologies, resulting in a more proficient and prepared cybersecurity workforce.</li>
            </ul>
        </div>
        <div class="feature col">
            <h3 class="fs-5 text-body-emphasis">2009 - 2012 <br> Sergeant – Staff Sergeant <br> Information Systems Security Officer <br> 9th Communications Battalion</h3>
            <ul>
                <li>Conducted Certification and Accreditation oversight, developed cybersecurity programs and policies, and provided technical guidance on IT decisions and network defense, ensuring bolstering mission critical networks cybersecurity posture and enabling compliance.</li>
                <li>Engineered, installed, and maintained endpoint protection systems, web proxies, enterprise firewalls, and ESX virtual data centers and conducted vulnerability assessments and patch remediation to enhance network security.</li>
            </ul>
        </div>
        <div class="feature col">
            <h3 class="fs-5 text-body-emphasis">2007 - 2009 <br> Sergeant <br> Data Systems Administrator Instructor <br> Marine Corps Communications Electronics School</h3>
            <ul>
                <li>Conducted over 600 hours formal instruction on: switching, routing, network security, UNIX / Windows server administration and security, effectively training new Marines to perform their roles as system administrators.</li>
            </ul>
        </div>
        <div class="feature col">
            <h3 class="fs-5 text-body-emphasis">2005 - 2007 <br> Private First Class – Sergeant <br> Systems Administrator <br> Marine Tactical Air Command Squadron</h3>            <ul>
                <li>Managed and maintained network infrastructure, including switching, routing, and server administration, while implementing security measures to protect critical data and ensure network integrity.</li>
                <li>Conducted regular security assessments, patch management, and configuration of firewalls and intrusion detection systems to safeguard network operations against potential threats.</li>
            </ul>
        </div>
    `;

    experienceContent.classList.add('experience-content', 'fade-in');

    function toggleExperience(showDoD) {
        // Fade out
        experienceContent.classList.remove('fade-in');
        experienceContent.classList.add('fade-out');
        
        setTimeout(() => {
            // Update content
            if (showDoD) {
                experienceContent.innerHTML = dodContent;
                industryBtn.classList.remove('active');
                dodBtn.classList.add('active');
            } else {
                experienceContent.innerHTML = industryContent;
                dodBtn.classList.remove('active');
                industryBtn.classList.add('active');
            }
            
            // Fade in
            setTimeout(() => {
                experienceContent.classList.remove('fade-out');
                experienceContent.classList.add('fade-in');
            }, 50);
        }, 400);
    }

    industryBtn.addEventListener('click', () => {
        if (!industryBtn.classList.contains('active')) {
            toggleExperience(false);
        }
    });

    dodBtn.addEventListener('click', () => {
        if (!dodBtn.classList.contains('active')) {
            toggleExperience(true);
        }
    });
});
