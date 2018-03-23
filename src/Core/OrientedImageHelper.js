import { Euler, Matrix4 } from 'three';
import Coordinates from './Geographic/Coordinates';

export default {

    toCoordGeographic(ori) {
        return new Coordinates('EPSG:4326', ori.longitude, ori.latitude, ori.height);
    },

    parseInfoEastingNorthAltitudeToCoordinate(projection, info, offset) {
        return new Coordinates(projection, info.easting + offset.x, info.northing + offset.y, info.altitude + offset.z);
    },

    parseMicMacOrientationToMatrix(panoramic) {
        const d2r = Math.PI / 180;
        const euler = new Euler(
            panoramic.roll * d2r,
            panoramic.pitch * d2r,
            panoramic.heading * d2r,
            'XYZ');

        const matrixFromEuler = new Matrix4().makeRotationFromEuler(euler);

        // The three angles ω,ɸ,k are computed
        // for a traditionnal image coordinate system (X=colomns left to right and Y=lines bottom up)
        // and not for a computer vision compliant geometry (X=colomns left to right and Y=lines top down)
        // so we have to multiply to rotation matrix by this matrix :
        var inverseYZ = new Matrix4().set(
                1, 0, 0, 0,
                0, -1, 0, 0,
                0, 0, -1, 0,
                0, 0, 0, 1);

        matrixFromEuler.multiply(inverseYZ);

        return matrixFromEuler;
    },

    parseAircraftConventionOrientationToMatrix(panoramic) {
        const d2r = Math.PI / 180;
        const euler = new Euler(
            panoramic.tilt * d2r,
            panoramic.azimuth * d2r,
            panoramic.roll * d2r,
            'ZYX');

        const matrixFromEuler = new Matrix4().makeRotationFromEuler(euler);

        return matrixFromEuler;
    },
};
