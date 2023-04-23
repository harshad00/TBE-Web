
import { Text } from '@/components';
const ContactCard = () => {
    return (
        <div className="px-96 h-screen flex items-center -mt-24 ">
            <div className=" w-full rounded-lg  gradient-5   mx-auto  overflow-hidden bg-dark text-white shadow-lg">
                <div className="flex flex-col items-center justify-center p-4 divide-y ">
                    <Text level="h3" className="heading-3">Get In Touch With Us</Text>

                </div>
                <hr />
                <div className="w-full flex justify-center items-center p-24">
                    <div className="flex flex-col items-center space-y-4">
                        <Text level="h4" className="heading-4">
                            Email: theboringeducation@gmail.com
                        </Text>
                        <Text level="h4" className="heading-4">
                            Mobile: +91-8884966267
                        </Text>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactCard