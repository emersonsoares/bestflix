$(function () {

    $.initialize('.jawBone', function() {
        const menu = $(this).children('.menu')

        $(menu).append(
            '<li class="bestflix"> \
                <a role="link">Bestflix</a>\
                <span></span>\
            </li>'
        )

        $('.bestflix').on('click', function() {
            const jawBone = $(this).parents('.jawBone');

            const jawBonePanes = $(jawBone).children('.jawBoneCommon').children('.jawBonePanes');

            $(jawBonePanes).children('.jawBonePane').hide();
            $(jawBone).children('.overviewPlay').hide();

            // const newPane = $(currentPane).clone();

            // $(newPane).html('test');

            // $(jawBonePanes).html($(newPane));
        });

        $(menu).children().on('click', function() {
            $(this).addClass('current').siblings().removeClass('current');
        });
    })
})