$(function () {

    const bestflixTab = {
        head: `
            <li class="bestflix-tab">
                <a role="link">
                    Bestflix
                </a>
                <span></span>
            </li>
        `,
        pane: `
            <div class="jawBonePane bestflix-pane" tabindex="-1" style="opacity: 1; transition-duration: 300ms; display: none;">
                <div>
                    <div class="bestflix">
                        <div class="jawbone-bestflix-info has-jawbone-nav-transition"></div>
                    </div>
                </div>
            </div>
        `
    }

    const loadContent = function(container) {
        $.ajax({
            url: 'https://correiosapi.apphb.com/cep/05037001',
            crossDomain: true
        })
        .done(function(data) {
            container.html(JSON.stringify(data))
        })
    }

    $.initialize('.jawBone', function() {
        const jawBone = $(this)
        const menu = jawBone.children('.menu')
        const jawBonePanes = jawBone.children('.jawBoneCommon').children('.jawBonePanes')

        menu.append(bestflixTab.head)
        jawBonePanes.append(bestflixTab.pane)

        menu.children().click(function() {
            const menuItem = $(this)

            menuItem
                .addClass('current')
                .siblings()
                .removeClass('current')

            if(menuItem.hasClass('bestflix-tab')) {
                jawBonePanes.children('.jawBonePane').hide()
                jawBone.children('.overviewPlay').hide()

                const bestflixPane = jawBonePanes.children('.jawBonePane.bestflix-pane')

                loadContent(bestflixPane)

                bestflixPane.fadeIn(300)
            }
            else {
                jawBonePanes.children('.jawBonePane').show()
                jawBonePanes.children('.jawBonePane.bestflix-pane').hide()
            }
        })
    })
})