import { useEffect, useState } from "react"
import materialUiImports from "../components/imports/materialUiImports"
const Terms = () => {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const tableOfContent = [
        {
            title: "Guest Terms",
            info: ["Our Mission", "Searching and Booking on airbnb",
                "Cancellations, Travel Issues, Refunds and Booking Modifications",
                "Your Responsibilities and Assumption of Risk."
            ]
        },
        {
            title: "Host Terms",
            info: ["Hosting on Airbnb.", "Managing Your Listing.",
                "Cancellations, Travel Issues, Refunds and Booking Modifications",
                "Taxes."
            ]
        },
        {
            title: "General Terms",
            info: ["Reviews.", "Content.", "Fees",
                "Airbnb Platform Rules"

            ]
        },

    ]
    const dispTerms = tableOfContent.map(item =>
        <ul>
            <li>
                <p className="font-bold py-2 text-lg">{item.title}</p>
                {item.info.map(
                    item =>
                        <p className="underline py-1 font-bold cursor-pointer">
                            {item}
                        </p>
                )}
            </li>
        </ul>
    )

    return (
        <div className="md:w-[80%] lg:w-[60%] mx-auto" id="Help-top">
            <p className="text-gray-500 my-5">Legal terms</p>
            <p className="text-4xl flex my-5">Terms of service</p>
            <div className="border border-1 rounded-lg px-[2%] flex pt-3 pb-5">
                <materialUiImports.LanguageIcon />
                <p className="basis-11/12 pl-1 text-sm">
                    If your country of residence or establishment is within the European Economic Area (“EEA”), Switzerland or the United Kingdom, <span className="font-bold underline">the Terms of Service for European Users</span> apply to you.
                    <br />
                    If your country of residence or establishment is outside of the EEA, Switzerland, and the United Kingdom, <span className="font-bold underline">the Terms of Service for Non-European Users</span> apply to you.
                </p>
            </div>
            <p className="text-4xl flex my-5">Terms of service for Non-European Users</p>
            <p className="font-bold">
                Section 23 of these Terms contains an arbitration agreement and class
                action waiver that apply to all claims brought against Airbnb in the United States.
                Please read them carefully.
            </p>
            <p>
                Last Updated: <span>January 25, 2023</span>
            </p>
            <p>
                Thank you for using Airbnb!
            </p>
            <p>
                These Terms of Service <strong>(“Terms”)</strong> are a binding legal agreement between you and Airbnb that govern your right to use the websites, applications,
                and other offerings from Airbnb (collectively, the <strong> “Airbnb Platform”</strong>).
                When used in these <strong> Terms, “Airbnb,” “we,” “us,”</strong> or <strong>“our” </strong>refers to the Airbnb entity set out on <strong>Schedule 1</strong> with whom you are contracting.
            </p>
            <p>
                The Airbnb Platform offers an online venue that enables users (“Members”)
                to publish, offer, search for, and book services. Members who publish and offer services are “Hosts”
                and Members who search for, book, or use services are “Guests.” Hosts offer accommodations (“Accommodations”),
                activities, excursions, and events (“Experiences”), and a variety of travel and other services (collectively, “Host Services,”
                and each Host Service offering, a “Listing”). You must register an account to access and use many features of the Airbnb Platform,
                and must keep your account information accurate. As the provider of the Airbnb Platform, Airbnb does not own, control, offer or manage any
                Listings or Host Services. Airbnb is not a party to the contracts entered into directly between Hosts and Guests, nor is Airbnb a real estate
                broker, travel agency, or insurer. Airbnb is not acting as an agent in any capacity for any Member, except as specified in the Payments Terms of Service (“Payment Terms”).
                To learn more about Airbnb’s role see Section 16.
            </p>
            <p>
                We maintain other terms and policies that supplement these Terms like our Privacy Policy, which describes our collection and use of personal data, and our Payments Terms, which govern any payment services provided to Members by the Airbnb payment entities (collectively "Airbnb Payments").
            </p>
            <p>
                If you are a Host, you are responsible for understanding and complying with all laws, rules, regulations and contracts with third parties that apply to your Host Services.
            </p>

            <p className="font-bold text-2xl">Table of Contents</p>
            {dispTerms}

            {
                showButton &&
                <button onClick={scrollToTop} className="flex items-center justify-center dark:bg-white dark:text-black bg-black text-white rounded-lg max-w-[150px] fixed bottom-20 z-50 right-8 px-5 py-3 text-md hover:underline" >
                    <materialUiImports.ArrowUpwardIcon />
                    back to top
                </button>
            }
        </div>
    )
}
export default Terms