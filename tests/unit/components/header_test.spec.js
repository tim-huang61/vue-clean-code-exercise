import Header from "@/components/Header";
import { shallowMount } from "@vue/test-utils";
describe("header", () => {
    it("hide cake", () => {
        const header = shallowMount(Header);
        expect(header.vm.profileCaption).toEqual("Jackson");
    });

    it("show cake", () => {
        const header = shallowMount(Header, {
            methods:{
                getToday() {
                    return new Date(2018, 9, 18);
                }
            }
        });
        expect(header.vm.profileCaption).toEqual("Jackson🎂");
    });
});
