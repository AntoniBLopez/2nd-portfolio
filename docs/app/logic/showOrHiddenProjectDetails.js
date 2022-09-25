function showOrHiddenProjectDetails() {

    console.log('funciona')

    const projectsSection = document.getElementsByClassName('projects-section')
    const projectCard = document.getElementsByClassName('project-card')

    const onlineStoreDetails = document.getElementById('onlineStoreDetails')
    const onlineStoreDetailsH3 = document.getElementById('onlineStoreDetails-h3')
    const onlineStoreDetailsH5 = document.getElementById('onlineStoreDetails-h5')
    const onlineStoreDetailsGitHubBtn = document.getElementById('onlineStoreDetailsGitHubBtn')

    const dataBasesDetails = document.getElementById('databasesDetails')
    const dataBasesDetailsH3 = document.getElementById('databasesDetails-h3')
    const dataBasesDetailsH5 = document.getElementById('databasesDetails-h5')
    const databasesDetailsPhoto1Btn = document.getElementById('databasesDetailsPhoto1Btn')
    const databasesDetailsPhoto2Btn = document.getElementById('databasesDetailsPhoto2Btn')
    const databasesDetailsPhoto3Btn = document.getElementById('databasesDetailsPhoto3Btn')

    const bingoGameDetails = document.getElementById('bingoGameDetails')
    const bingoGameDetailsH3 = document.getElementById('bingoGameDetails-h3')
    const bingoGameDetailsH5 = document.getElementById('bingoGameDetails-h5')
    const bingoGameDetailsLiveBtn = document.getElementById('bingoGameDetailsLiveBtn')
    const bingoGameDetailsGitHubBtn = document.getElementById('bingoGameDetailsGitHubBtn')

    let itsVisible = false
    let project = Object
    let h3Project = ''
    let h5Project = ''
    let btnOneProject = ''
    let btnTwoProject = ''
    let btnThreeProject = ''

    function showOrHiddenProjectDetails(detectProject) {

        checkProject(detectProject)

        // const isNotVisible = project.style.opacity === '0' || project.style.opacity === '';
        const isVisible = project.style.opacity === '1';

        if (!isVisible) {

            showDetails()
            itsVisible = true

        } else if (isVisible) {

            hiddenDetails()
            itsVisible = false
        }
    }

    function addDataToOnlineStore () {
        project = onlineStoreDetails
        h3Project = onlineStoreDetailsH3
        h5Project = onlineStoreDetailsH5
        btnOneProject = onlineStoreDetailsGitHubBtn
        btnTwoProject = ''
        btnThreeProject = ''
    }
    function addDataToDataBases () {
        project = dataBasesDetails
        h3Project = dataBasesDetailsH3
        h5Project = dataBasesDetailsH5
        btnOneProject = databasesDetailsPhoto1Btn
        btnTwoProject = databasesDetailsPhoto2Btn
        btnThreeProject = databasesDetailsPhoto3Btn
    }
    function addDataToBingoGame () {
        project = bingoGameDetails
        h3Project = bingoGameDetailsH3
        h5Project = bingoGameDetailsH5
        btnOneProject = bingoGameDetailsLiveBtn
        btnTwoProject = bingoGameDetailsGitHubBtn
        btnThreeProject = ''
    }

    function checkProject(detectProject) {

        if (detectProject === 'onlineStoreDetails') {

            addDataToOnlineStore()
        } else if (detectProject === 'dataBasesDetails') {

            addDataToDataBases()
        } else if (detectProject === 'bingoGameDetails') {

            addDataToBingoGame()
        }
    }

    function showDetails() {

        project.style.opacity = 1
        project.style.background = 'linear-gradient(rgba(52, 52, 52, 0.5) 0%, #e6e6e6)'


        h3Project.style.bottom = '70%'
        h3Project.style.opacity = 1
        h3Project.style.transition = 'all .40s'

        h5Project.style.bottom = '40%'
        h5Project.style.opacity = 1
        h5Project.style.transition = 'all .40s'

        btnOneProject.style.bottom = '20%'
        btnOneProject.style.opacity = 1
        btnOneProject.style.transition = 'all .30s'

        if (typeof btnTwoProject === 'object') {
            btnTwoProject.style.bottom = '20%'
            btnTwoProject.style.opacity = 1
            btnTwoProject.style.transition = 'all .30s'
        }

        if (typeof btnThreeProject === 'object') {
            btnThreeProject.style.bottom = '20%'
            btnThreeProject.style.opacity = 1
            btnThreeProject.style.transition = 'all .30s'
        }
    }

    function hiddenDetails() {

        project.style.opacity = 0
        project.style.background = 'transparent'

        h3Project.style.bottom = '0'
        h3Project.style.opacity = 0
        h3Project.style.transition = 'all .40s'

        h5Project.style.bottom = '0'
        h5Project.style.opacity = 0
        h5Project.style.transition = 'all .40s'

        btnOneProject.style.bottom = '0'
        btnOneProject.style.opacity = 0
        btnOneProject.style.transition = 'all .40s'

        if (typeof btnTwoProject === 'object') {
            btnTwoProject.style.bottom = '0'
            btnTwoProject.style.opacity = 0
            btnTwoProject.style.transition = 'all .40s'
        }

        if (typeof btnThreeProject === 'object') {
            btnThreeProject.style.bottom = '0'
            btnThreeProject.style.opacity = 0
            btnThreeProject.style.transition = 'all .40s'
        }
    }

    let itsMobileDevice = false

    window.addEventListener('scroll', () => checkIfItIsMobileDevice())

    function checkIfItIsMobileDevice() {

        const pageWidth = document.documentElement.scrollWidth
        const isMobile = pageWidth < 950

        if (isMobile) {
            itsMobileDevice = true
        } else {
            itsMobileDevice = false
        }
    }

    let clickOnTheZeroCard = false
    let clickOnTheOneCard = false
    let clickOnTheTwoCard = false

    projectCard[0].addEventListener("click", () => {

        if (itsMobileDevice) {
            showOrHiddenProjectDetails('onlineStoreDetails')
        }

        clickOnTheZeroCard = true
    })
    projectCard[1].addEventListener("click", () => {

        if (itsMobileDevice) {
            showOrHiddenProjectDetails('dataBasesDetails')
        }

        clickOnTheOneCard = true
    })
    projectCard[2].addEventListener("click", () => {

        if (itsMobileDevice) {
            showOrHiddenProjectDetails('bingoGameDetails')
        }

        clickOnTheTwoCard = true
    })

    document.addEventListener('click', () => {

        // let card = ''
        // if (clickOnTheZeroCard === true) {
        //     card = 'ZeroCard'
        // } else if (clickOnTheOneCard === true) {
        //     card = 'OneCard'
        // } else if (clickOnTheTwoCard === true) {
        //     card = ''
        // }

        if(clickOnTheZeroCard === true) {
            clickOnTheZeroCard = false

        } else if (clickOnTheZeroCard === false && onlineStoreDetails.style.opacity === '1') {
            addDataToOnlineStore()
            hiddenDetails()
        }

        if(clickOnTheOneCard === true) {
            clickOnTheOneCard = false

        } else if (clickOnTheOneCard === false && dataBasesDetails.style.opacity === '1') {
            addDataToDataBases()
            hiddenDetails()
        }

        if(clickOnTheTwoCard === true) {
            clickOnTheTwoCard = false

        } else if (clickOnTheTwoCard === false && bingoGameDetails.style.opacity === '1') {
            addDataToBingoGame()
            hiddenDetails()
        }

    })

    // projectsSection.addEventListener("click", () => {

    //     if (itsVisible === true) {

    //         showOrHiddenDetailsOnlineStore()
    //     }
    // })

}

export default showOrHiddenProjectDetails;
