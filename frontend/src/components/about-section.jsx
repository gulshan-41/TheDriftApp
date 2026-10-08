import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function AboutSection() {
    return (
        <View style={styles.aboutSection}>
            <View style={styles.aboutWrapper}>
                <View style={styles.mainAboutSection}>
                    <Text 
                        style={styles.mainAboutText}
                        numberOfLines={7} 
                        ellipsizeMode="tail"
                    >
                        The Drift Cafe was born in 2015 from a simple dream shared by siblings Alex and Jordan, who grew up in a bustling coastal town where fresh seafood and warm hospitality were everyday staples. What started as weekend pop-up brunches in our family garage quickly evolved into a beloved neighborhood spot, blending modern cafe vibes with timeless restaurant classics. Today, we're proud to be a family-owned haven where every dish is crafted with love, using locally sourced ingredients to create memorable experiences. Whether you're drifting in for a quick coffee or a leisurely dinner, our story is about bringing people together—one plate at a time.
                    </Text>
                </View>
                <View style={styles.subAboutSections}>
                    <View style={styles.subSection}>
                        <View style={styles.headPoint}>
                            <Pressable style={styles.pointBtn}>
                                <Icon style={styles.headIcon} name="chevron-thin-right" size={18} color="#000" />
                            </Pressable>
                            <Text style={styles.headText}>
                                4.8+
                            </Text>
                        </View>
                        <View style={styles.aboutParaWrapper}>
                            <Text
                                style={styles.paraText}
                                numberOfLines={3} 
                                ellipsizeMode="tail"
                            >
                                With 4.8/5 stars from over 2,500 reviews on Google and Yelp, The Drift Cafe is a community favorite. Customers rave about our cozy atmosphere and must-try items like the Drift Signature Burger. We're grateful for the loyalty that keeps us thriving!
                            </Text>
                        </View>
                    </View>
                    <View style={styles.subSection}>
                        <View style={styles.headPoint}>
                            <Pressable style={styles.pointBtn}>
                                <Icon style={styles.headIcon} name="chevron-thin-right" size={18} color="#000" />
                            </Pressable>
                            <Text style={styles.headText}>
                                80%
                            </Text>
                        </View>
                        <View style={styles.aboutParaWrapper}>
                            <Text
                                style={styles.paraText}
                                numberOfLines={3} 
                                ellipsizeMode="tail"
                            >
                                At The Drift, we prioritize sustainability with 80% of our menu featuring organic, locally sourced produce. Our zero-waste initiatives and allergy-friendly options ensure everyone feels welcome. We've served over 50,000 happy meals since opening, all with a focus on health and flavor.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.subSection}>
                        <View style={styles.headPoint}>
                            <Pressable style={styles.pointBtn}>
                                <Icon style={styles.headIcon} name="chevron-thin-right" size={18} color="#000" />
                            </Pressable>
                            <Text style={styles.headText}>
                                Chief
                            </Text>
                        </View>
                        <View style={styles.aboutParaWrapper}>
                            <Text
                                style={styles.paraText}
                                numberOfLines={3} 
                                ellipsizeMode="tail"
                            >
                                Our kitchen is led by award-winning Chef Elena Ramirez, with over 15 years in fine dining, specializing in coastal-inspired cuisine. Backed by a team of 5 passionate culinarians trained in sustainable cooking, we blend fresh, seasonal ingredients into every dish.
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    aboutSection: {
        width: '100%',
        flexDirection: 'column',
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: 40,
    },
    aboutWrapper: {
        width: '100%',
        flexDirection: 'column',
        gap: 8,
    },

    mainAboutSection: {
        height: 260,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        padding: 20,
    },
    mainAboutText: {
        fontSize: 12,
    },
    subAboutSections: {
        width: '100%',
        flexDirection: 'column',
        gap: 8,
    },

    subSection: {
        width: '100%',
        height: 260,
        justifyContent: 'space-between',
        backgroundColor: '#0d1b2a',
        borderRadius: 20,
        padding: 20,
    },
    headPoint: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    pointBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        borderRadius: 14,
        backgroundColor: '#fff',
    },
    headIcon: {
        transform: [
            { rotate: '-45deg' }
        ],
    },
    headText: {
        fontSize: 40,
        fontWeight: '900',
        color: '#fff'
    },
    aboutParaWrapper: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 16,
    },
    paraText: {
        fontSize: 12,
    }
})

export default AboutSection;